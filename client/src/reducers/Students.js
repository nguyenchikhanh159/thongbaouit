import * as types from "./../constants/ActionType";

var initialState = [];



const Students = (state = initialState, action) => {

  switch (action.type) {
    case types.SEARCH_STUDENTS_ID:
      state = action.student_id;
      return [...state];
  
    default:
      return [...state];
  }
};

export default Students;
