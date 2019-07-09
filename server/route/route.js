const router=require('express').Router()
const controller =require('./../controller/Controller')

router.get('/add',controller.getAll)
router.post('/',controller.postData)
router.post('/access',controller.getStudentId)
router.get('/access',controller.getStudentIdRespond)

module.exports=router