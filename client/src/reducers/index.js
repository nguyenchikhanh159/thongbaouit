import {combineReducers} from 'redux';
import Students from './Students'
import StudentsAccess from './StudentsAccess'
import Count from './Count'
import StudentsAccessRespond from './StudentsAccessRespond'

const myReducer=combineReducers({
    Students,
    StudentsAccess,
    Count,
    StudentsAccessRespond
});

export default myReducer;
