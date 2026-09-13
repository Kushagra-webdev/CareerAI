const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const interviewController = require("../controllers/interview.controller.js");
const upload = require('../middlewares/file.middleware');

const interviewRouter = express.Router();

/**
 * @route   POST /api/interview/generate-report
 * @desc    Generate interview report based on resume, self-description, and job description.
 * @access  Private
 * @returns {Object} The generated interview report.
 */

interviewRouter.post('/generate-report', authMiddleware.authUser, upload.single('resume'), interviewController.generateInterviewReportController);

/**
 * @route GET /api/interview/reports/:interviewId
 * @desc get interview report by interviewId
 * @access private
 */

interviewRouter.get('/reports/:interviewId', authMiddleware.authUser, interviewController.getInterviewReportController);

/**
 * @route GET /api/interview/reports
 * @desc get all interview reports of the user
 * @access private
 */

interviewRouter.get('/reports', authMiddleware.authUser, interviewController.getAllInterviewReportsController);

/**
 * @route POST /api/interview/reports/resume/:interviewId
 * @desc generate resume pdf from interviewId
 * @access private
 */

interviewRouter.post('/reports/resume/:interviewId', authMiddleware.authUser, interviewController.generateResumePdfController);

module.exports = interviewRouter;