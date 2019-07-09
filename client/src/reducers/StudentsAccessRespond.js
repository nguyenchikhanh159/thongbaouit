import * as types from "./../constants/ActionType";

var initialState = [];



const StudentsAccessRespond = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_STUDENTS_ID_RESPOND:
      state = action.student_id;
      return [...state];
  
    default:
      return [...state];
  }
};

export default StudentsAccessRespond;
