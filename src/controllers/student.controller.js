const getLogger = require("../common/logger")
const getLogg = require("../common/logger")

const logger = getLogger(__filename)


const getAllStudents = (req, res) => {
    logger.info('find all students')
    res.json([])
}

const addStudent = (req, res) => {
    res.json([])
}

const getStudentById = (req, res) => {
    res.json([])
}

const updateStudentById = (req, res) => {
    res.json([])
}

const deleteStudentById = (req, res) => {
    res.json([])
}

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById
}