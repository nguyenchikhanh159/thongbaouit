import *as types from './../constants/ActionType';
import callApi from './../utils/ApiCaller';



export const actGetStudentsid=(student_id)=>{ //POST StudenID && Reponse Data from Student ID
    return dispatch=>{
        return callApi('uit','POST',{student_id:student_id}).then(res=>{
               
            dispatch(search_students_id(res.data));
        })
    }
}
export const search_students_id=(student_id)=>{
    return{
        type:types.SEARCH_STUDENTS_ID,
        student_id
    }
}
export const actGetStudentsidAccess=(student_id)=>{ // POST StudentID && Reponse Student id Access
    return dispatch=>{
        return callApi('uit/access','POST',{student_id:student_id}).then(res=>{
            dispatch(get_students_id_access(res.data));
        })
    }
}
export const get_students_id_access=(student_id)=>{
    return{
        type:types.GET_STUDENTS_ID,
        student_id
    }
}
export const actGetStudentsidAccessRespond=()=>{ // POST StudentID && Reponse Student id Access
    return dispatch=>{
        return callApi('uit/access','GET',null).then(res=>{
            console.log(res.data)
            dispatch(get_students_id_access_Respond(res.data));
        })
    }
}
export const get_students_id_access_Respond=(student_id)=>{
    return{
        type:types.GET_STUDENTS_ID_RESPOND,
        student_id
    }
}
// export const get_students_id_Count=(count)=>{
//     return{
//         type:types.COUNT,
//         count
//     }
// }


