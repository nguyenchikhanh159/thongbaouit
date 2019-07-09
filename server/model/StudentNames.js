const mongoose=require('mongoose');
const mongooseHidden = require('mongoose-hidden')({ defaultHidden: { __v: true } });

const StudentNames=mongoose.Schema(
    {
        name_student:String,
        student_id:String,
        norder:Number,
        note:String,
        room:{type:mongoose.Schema.Types.ObjectId,ref:'Subjects'}
    }
)

module.exports=mongoose.model('StudentNames',StudentNames);