//cac duong loi xay dung duong loi 1986 den nay
//quan diem cua dcsvn ve hoan thien the che kinh te thi truong dinh huong xa hoi den nay

var url = 'mongodb://localhost:27017/uit';
const mongoose = require('mongoose');
const StudentsId = require('../model/StudentsId')
var StudentNames = require('./../model/StudentNames')
var Subjects = require('./../model/Subjects')
var XLSX = require('xlsx');
var fs = require('fs');



exports.getAll = async (req, res, next) => {
    var array = [];
    testFolder = './/Excel';
    console.log(testFolder)
    array = fs.readdirSync(testFolder);
    let result = [];
    for (const file of array) {
        var workbook = XLSX.readFile('Excel' + '/' + file, { cellDates: true });//ReadFile
        var sheetName = workbook.SheetNames[0]; // Get Name ws=workbook.Sheets['CE104.J11.MTCL-E32'];
        var sheetData = workbook.Sheets[sheetName];
        var MT = sheetData.C6.w; //Mon Thi
        var MaLop = sheetData.E6.w;//Ma Lop
        var NT = (sheetData.F5.w).substring(9, (sheetData.F5.w).length);//Ngay Thi
        var PT = (sheetData.F6.w).substring(11, (sheetData.F6.w).length);//Phong Thi
        result.push(sheetData)

        const NewSubjects = new Subjects({
            name_subject: MT,
            c_subject: MaLop,
            day: NT,
            room: PT

        })
        await NewSubjects.save(err => {
            if (err) handleError(err)
        })

        //Get Length in Object SheetData
        const ObjectData = Object.keys(sheetData);
        const ObjectData_Length = ObjectData.length - 3;
        //Connect Mongodb and Insert Data

        for (let i = 26; i <= ObjectData_Length; i++) {

            if (sheetData[Object.keys(sheetData)[i]]['w'].length === 8) {
                var MSSV = sheetData[Object.keys(sheetData)[i]]['w']
                var STT = sheetData[Object.keys(sheetData)[i - 1]]['w']
                var Ten = sheetData[Object.keys(sheetData)[i + 1]]['w']
                var Note = sheetData[Object.keys(sheetData)[i + 2]]['w']
                if (Note.length === 10) {
                    const NewStudents = new StudentNames({
                        name_student: Ten,
                        student_id: MSSV,
                        norder: STT,
                        note: Note,
                        room: NewSubjects._id,

                    })
                    await NewStudents.save(err => {
                        if (err) return handleError(err)
                    })
                }
                else {
                    const NewStudents = new StudentNames({
                        name_student: Ten,
                        student_id: MSSV,
                        norder: STT,
                        note: null,
                        room: NewSubjects._id,

                    })
                    await NewStudents.save(err => {
                        if (err) return handleError(err)
                    })
                }

            }
        }
    }
    res.send(sheetData)

}
// Get Student_id and Find()
exports.postData = async (req, res, next) => {
    const { student_id } = req.body
    var s = StudentNames.find({ student_id: student_id })
        .populate('room')
        .exec(function (err, data) {
            if (err) return handleError(err);
            // console.log(data)
            res.json(data)
        })

}
//Save Students_id
exports.getStudentId = async (req, res, next) => {
    const { student_id } = req.body
    var flag = true;
    let data = await StudentsId.find().then((data) => {
        data.forEach(data => {
            // console.log(data.student_id)
            if (data.student_id === req.body.student_id) {
                flag = false
                console.log('ABC')
            }
        })
    })
    if (flag) {
        try {
            const NewStudentsId = new StudentsId({
                student_id: student_id
            })
            NewStudentsId.save()
        } catch (err) {
            console.log(err)
        }
        console.log('Success')
    } else {
        console.log('Data exist')
    }

    res.json(student_id)
}
//Respond Students_id
exports.getStudentIdRespond = async (req, res, next) => {
    await StudentsId.find().limit(20).sort({ _id: -1 })
        .exec(function (err, data) {
            if (err) return handleError(err);
            res.json(data)
            console.log(data)
        })

}
