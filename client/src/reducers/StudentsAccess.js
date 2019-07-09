import * as types from "./../constants/ActionType";

var initialState = [];



const StudentsAccess = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_STUDENTS_ID:
      state = action.student_id;
      return [...state];
  
    default:
      return [...state];
  }
};

export default StudentsAccess;
