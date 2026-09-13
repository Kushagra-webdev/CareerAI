const { GoogleGenAI } = require("@google/genai");
const { z } = require('zod');
const puppeteer = require('puppeteer');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const interviewReportSchema = z.object({

  title: z.string().describe('The title of the job for which the interview report is generated'),

  matchScore: z.number()
    .min(1)
    .max(100)
    .describe('A score from 1 to 100 indicating match between resume and job description, higher is better'),

  technicalQuestions: z.array(
    z.object({
      question: z.string()
        .describe('The technical questions that can be asked in an interview'),

      intention: z.string()
        .describe('The intention of interviewer behind asking this question'),

      answer: z.string()
        .describe('How to answer, what points to cover, what approach to follow'),

    })).describe('Technical question that can be asked in the interview along with their intention and answer'),

  behaviouralQuestions: z.array(
    z.object({
      question: z.string()
        .describe('The behavioural questions that can be asked in an interview'),

      intention: z.string()
        .describe('The intention of interviewer behind asking this question'),

      answer: z.string()
        .describe('How to answer, what points to cover, what approach to follow'),

    })).describe('Behavioural question that can be asked in the interview along with their intention and answer'),

  skillGap: z.array(
    z.object({
      skill: z.string()
        .describe('The skill that needs to be improved'),

      severity: z.enum(['LOW', 'MEDIUM', 'HIGH'])
        .describe('The severity of the skill gap'),

    })).describe('The skill gap that needs to be improved along with their severity'),

  prepPlan: z.array(
    z.object({
      day: z.number()
        .describe('The day on the preparation plan, starting from 1st day'),

      focus: z.string()
        .describe('The focus of the skill improvement'),

      tasks: z.array(
        z.string()
          .describe('The tasks that need to be performed to improve the skill')
      ),

    })).describe('The preparation plan along with the tasks that need to be performed')

});

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

  const prompt = `Generate a complete interview preparation report based on the following information:
                  resume: ${resume}
                  selfDescription: ${selfDescription}
                  jobDescription: ${jobDescription}
  `

  const jsonSchema = z.toJSONSchema(interviewReportSchema);

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: jsonSchema,
    }
  })

  return JSON.parse(response.text);
}

async function generatePdfFromHtml(html) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })
  await browser.close();
  return pdfBuffer;
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

  const resumePdfSchema = z.object({
    html: z.string().describe('The HTML content of the resume which can be converted to PDF using any library like puppeteer'),
  })

  const prompt = `Generate an ATS-friendly HTML resume using the following information:
                    Resume: ${resume}
                    Self Description: ${selfDescription}
                    Job Description: ${jobDescription}

                    Instructions:
                    - Tailor the resume to the job description.
                    - Include relevant keywords and skills from the job description naturally.
                    - Do not invent any information or experience.
                    - Use a clean, professional, single-column layout.
                    - Use sections such as Summary, Skills, Experience, Projects, Education, Certifications, and Achievements when applicable.
                    - Include inline CSS so the HTML can be directly converted to PDF using Puppeteer.
                    - Use semantic HTML and keep the resume concise.
                    - Do not include images, JavaScript, tables, or unnecessary graphics.

                    Do not include markdown, explanations, or any text outside the JSON.
`;

  const jsonSchema = z.toJSONSchema(resumePdfSchema);

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: jsonSchema,
    }
  })

  const jsonContent = JSON.parse(response.text);
  const pdfBuffer = await generatePdfFromHtml(jsonContent.html);
  return pdfBuffer;
}

module.exports = { generateInterviewReport, generateResumePdf };

// const interviewReportSchema = {
//   type: 'object',
//   properties: {
//     matchScore: {
//       type: 'number',
//       description: 'A score form 1 to 100 indicating match between resume and job description, higher is better'
//     },
//     technicalQuestions: {
//       type: 'array',
//       description: 'Technical question that csn be asked in the interview along with their intention and answer',
//       items: {
//         type: 'object',
//         properties: {
//           question: {
//             type: 'string',
//             description: 'The technical questions that can be asked in an interview'
//           },
//           intention: {
//             type: 'string',
//             description: 'The intention of interviewer behind asking this question'
//           },
//           answer: {
//             type: 'string',
//             description: 'How to answeer, what points to cover, what approach to follow'
//           }
//         },
//         required: ['question', 'intention', 'answer']
//       }
//     },
//     behaviouralQuestions: {
//       type: 'array',
//       description: 'The behavioural question that can be asked in the interview along with their intention and answer',
//       items: {
//         type: 'object',
//         properties: {
//           question: {
//             type: 'string',
//             description: 'The behavioural questions that can be asked in an interview'
//           },
//           intention: {
//             type: 'string',
//             description: 'The intention of interviewer behind asking this question'
//           },
//           answer: {
//             type: 'string',
//             description: 'How to answeer, what points to cover, what approach to follow'
//           }
//         },
//         required: ['question', 'intention', 'answer']
//       }
//     },
//     skillGap: {
//       type: 'array',
//       description: 'The skill gap that needs to be improved along with their severity',
//       items: {
//         type: 'object',
//         properties: {
//           skill: {
//             type: 'string',
//             description: 'The skill that needs to be improved'
//           },
//           severity: {
//             type: 'string',
//             enum: ['LOW', 'MEDIUM', 'HIGH'],
//             description: 'The severity of the skill gap'
//           }
//         },
//         required: ['skill', 'severity']
//       }
//     },
//     prepPlan: {
//       type: 'array',
//       description: 'The preparation plan along with the tasks that need to be performed',
//       items: {
//         type: 'object',
//         properties: {
//           day: {
//             type: 'number',
//             description: 'The day on the preparation plan, starting from 1st day'
//           },
//           focus: {
//             type: 'string',
//             description: 'The focus of the skill improvement'
//           },
//           tasks: {
//             type: 'array',
//             items: {
//               type: 'string',
//               description: 'The tasks that need to be performed to improve the skill'
//             }
//           }
//         },
//         required: ['day', 'focus', 'tasks']
//       }
//     }
//   },
//   required: ['matchScore', 'technicalQuestions', 'behaviouralQuestions', 'skillGap', 'prepPlan']
// }