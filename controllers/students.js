const { Student } = require('../models')

const create = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.status(200).json(student)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const student = await Student.update(
      req.body,
      { where: { id: req.params.studentId }, returning: true }
    )
    res.status(200).json(student)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentId)
    await student.destroy()
    res.status(200).json(student)
  } catch (err) {
    console.log(err)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteStudent
}