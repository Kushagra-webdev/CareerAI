import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3000/api',
    baseURL: import.meta.env.VITE_API_URL || '/api',
    withCredentials: true
});


// send api to backend
export const generateInterviewReport = async ({jobDescription, resumeFile, selfDescription}) => {

    // formData is used to send file
    const formData = new FormData()
    formData.append('jobDescription', jobDescription)
    formData.append('resume', resumeFile)
    formData.append('selfDescription', selfDescription)
    
    const res = await api.post("/interview/generate-report", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    // returns full resonse res.data = { message: "Interview report generated successfully", data: interviewReport }
    return res.data;
};


export const getInterviewReport = async (interviewId) => {
    const res = await api.get(`/interview/reports/${interviewId}`)
    return res.data; // returns json object { message, data }
};


export const getAllInterviewReports = async () => {
    const res = await api.get('/interview/reports')
    return res.data; // returns array of json objects {message, data[] }
}; 


export const generateResumePdf = async (interviewId) => {
    const res = await api.post(`/interview/reports/resume/${interviewId}`, null, { responseType: "blob"});
    return res.data;
}; 