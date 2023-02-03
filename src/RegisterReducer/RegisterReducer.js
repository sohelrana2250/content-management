import { contentActionType } from "../REDUX/ActionType";


const initialState = {


    container: { name: 'Sohel RANA' },
    addtoContent: [],
    userInfo: null,
    alluserData: [],
    makeAdmin: null




}


const RegisterReducer = (state = initialState, action) => {

    switch (action.type) {
        case contentActionType.ADD_CONTENT: return {

            ...state,

            addtoContent: action.payload

        }

        case contentActionType.USER_INFO: return {
            ...state,
            userInfo: action.payload
        }
        case contentActionType.ALL_USER_DATA: return {

            ...state,
            alluserData: action.payload
        }

        case contentActionType.MAKE_ADMIN: return {

            ...state,
            makeAdmin: action.payload
        }




        default:
            return state
    }



};

export default RegisterReducer;