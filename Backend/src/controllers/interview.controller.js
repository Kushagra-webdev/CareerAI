const pdfParse = require('pdf-parse');
const { generateInterviewReport, generateResumePdf } = require('../services/ai.services');
const InterviewReportModel = require('../models/interviewReport.model');

async function generateInterviewReportController(req, res) {

    const result = await new pdfParse.PDFParse(
    new Uint8Array(req.file.buffer)
    ).getText();
    
    const resumeContent = result.text;
    const selfDescription = req.body.selfDescription;
    const jobDescription = req.body.jobDescription;

    const interviewReportByAi = await generateInterviewReport({resume: resumeContent, selfDescription, jobDescription});

    console.log(JSON.stringify(interviewReportByAi, null, 2));

    const interviewReport = await InterviewReportModel.create({
        ...interviewReportByAi,
        user : req.user.id,
        resume: resumeContent,
        jobDescription,
        selfDescription,
    });

    return res.status(200).json({
        message: "Interview report generated successfully",
        data: interviewReport // single json object with all fields
    });

}

async function getInterviewReportController(req, res){
    const {interviewId} = req.params;
    const interviewReport = await InterviewReportModel.findById(interviewId);
    if(!interviewReport){
        return res.status(404).json({
            message: "Interview report not found"
        });
    }
    return res.status(200).json({
        message: "Interview report fetched successfully",
        data: interviewReport // single json object with all fields
    });
}

async function getAllInterviewReportsController(req, res){

    const interviewReports = await InterviewReportModel
    .find({user: req.user.id})
    .sort({createdAt: -1})
    .select("title _id createdAt");

    if(!interviewReports){
        return res.status(404).json({
            message: "Interview reports not found"
        });
    }
    return res.status(200).json({
        message: "Interview reports fetched successfully",
        data: interviewReports // array of json objects
    });

}

async function generateResumePdfController(req, res) {
    const {interviewId} = req.params;
    const interviewReport = await InterviewReportModel.findById(interviewId);
    if(!interviewReport){
        return res.status(404).json({
            message: "Interview report not found"
        });
    }

    const { resume, selfDescription, jobDescription } = interviewReport;
    const pdfBuffer = await generateResumePdf({ resume, selfDescription, jobDescription });
    
    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${interviewId}.pdf`
    })
    res.send(pdfBuffer);
}

module.exports = { generateInterviewReportController, getInterviewReportController, getAllInterviewReportsController, generateResumePdfController };