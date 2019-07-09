const mongoose=require('mongoose');
const mongooseHidden = require('mongoose-hidden')({ defaultHidden: { __v: true } });


const StudentsId=new mongoose.Schema({
    student_id:String
})

module.exports=mongoose.model('StudentsId',StudentsId)