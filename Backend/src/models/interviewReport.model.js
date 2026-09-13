const mongoose = require("mongoose");


/**
 * User Data-
 * Job desc : String
 * resume text : String
 * self desc : String
 * 
 * - matchScore : Number
 * 
 * - Tech Ques : [{
 *  questionText : String
 *  intention : String
 *  ans : String
 * }]
 * 
 * - Behavioural Ques : [{
 *  questionText : String
 *  intention : String
 *  ans : String
 * }]
 * 
 * - Skill gap : [{
 * skill : ""
 * severity : {
 * type : Str
 * enum : ["LOW" , "MEDIUM" , "HIGH"]
 * }
 * }]
 * 
 * - Prep Plan :[{
 * day : number
 * focus : String
 * tasks:[String]
 * }]
 */

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question text is required']
    },
    intention: {
        type: String,
        required: [true, 'Intention is required']
    },
    answer: {
        type: String,
        required: [true, 'Answer is required']
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, 'Skill is required']
    },
    severity: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        required: [true, 'Severity is required']
    }
}, {
    _id: false
})

const prepPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, 'Day is required']
    },
    focus: {
        type: String,
        required: [true, 'Focus is required']
    },
    tasks: [{
        type: String,
        required: [true, 'Tasks are required']
    }]
}, {
    _id: false
})

const interviewReportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    resume: {
        type: String,
    },
    jobDescription: {
        type: String,
        required: [true, 'Job description is required']
    },
    selfDescription:{
        type: String,
    },
    matchScore:{
        type: Number,
        min:0,
        max: 100,
    },
    technicalQuestions: [QuestionSchema],
    behaviouralQuestions: [QuestionSchema],
    skillGap: [skillGapSchema],
    prepPlan: [prepPlanSchema],
    title: {
        type: String,
        required: [true, 'Title is required']
    }
}, {
    timestamps: true
})

const InterviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = InterviewReportModel;