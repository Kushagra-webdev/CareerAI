import { useContext, useEffect } from "react";
import { generateInterviewReport, getInterviewReport, getAllInterviewReports, generateResumePdf } from "../services/interview.api";
import { InterviewContext } from "../Interview.context";
import { useParams } from 'react-router';

export const useInterview = () => {
    const context = useContext(InterviewContext);

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { interviewId } = useParams();
    const { loading, setLoading, report, setReport, reports, setReports } = context;

    const generateReport = async ({ jobDescription, resumeFile, selfDescription }) => {
        setLoading(true);
        let res = null;
        try {
            res = await generateInterviewReport({ jobDescription, resumeFile, selfDescription });
            // generateInterviewReport returns full axios response { message, data }
            // res = {message, data}
            setReport(res.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
        return res.data;
    };

    const getReportById = async (interviewId) => {
        setLoading(true);
        let res = null;
        try {
            res = await getInterviewReport(interviewId);
            // getInterviewReport returns full axios response { message, data }
            // res = {message, data}
            setReport(res.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
        return res.data;
    }

    const getAllReports = async () => {
        setLoading(true);
        let res = null;
        try {
            res = await getAllInterviewReports();
            // getAllInterviewReports returns array of json object
            // res = {message, data: array of json objects}
            setReports(res.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
        return res.data;
    };

    const getResumePdf = async (interviewId) => {
        setLoading(true);
        try {
            const response = await generateResumePdf(interviewId);

            const url = window.URL.createObjectURL(response);

            const link = document.createElement("a");
            link.href = url;
            link.download = `resume_${interviewId}.pdf`;

            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Failed to generate resume:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId);
        } else {
            getAllReports();
        }
    }, [interviewId]);

    return { loading, report, reports, generateReport, getReportById, getAllReports, getResumePdf };
}; 