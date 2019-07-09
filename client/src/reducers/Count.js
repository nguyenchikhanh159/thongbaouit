import * as types from "./../constants/ActionType";

var initialState = [];



const Count = (state = initialState, action) => {

    switch (action.type) {
        case types.COUNT:
            state = action.count
            return [...state];

        default:
            return [...state];
    }
};

export default Count;