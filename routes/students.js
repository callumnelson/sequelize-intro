const router = require('express').Router()
const studentsCtrl = require('../controllers/students.js')

router.get('/', studentsCtrl.index)
router.post('/', studentsCtrl.create)
router.put('/:studentId', studentsCtrl.update)
router.delete('/:studentId', studentsCtrl.delete)

module.exports = router