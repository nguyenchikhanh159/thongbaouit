const mongoose=require('mongoose');
const mongooseHidden = require('mongoose-hidden')({ defaultHidden: { __v: true } });

const Subjects=mongoose.Schema(
    {
        name_subject:String,// tên môn thi
        c_subject:String, // lớp thi 
        room:String, // phòng
        day:String, // ngày thi
        time:Date // ca thi
    }
)

module.exports=mongoose.model('Subjects',Subjects);