import {SIGN_IN, SIGN_OUT} from './actions'

const initialState = {
    userToken: null
  }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                userToken: action.data
            }
        case SIGN_OUT:
            return {
                ...state,
                userToken: action.data
            }
        default:
            return state;
    }
}

export default authReducer;