
import { contentActionType } from './ActionType'
const initialState = {

    categories: [],
    name: 'content-management',
    categoriesDetails: [],
    allnews: []



}


const ContentReducer = (state = initialState, action) => {

    switch (action.type) {


        case contentActionType.ALL_NEWS: return {
            ...state,
            allnews: action.payload

        }
        case contentActionType.CATEGORIES_FEATCH:

            return {
                ...state,
                categories: action.payload

            }

        case contentActionType.CATEGORIES_DETAILS:
            return {
                ...state,
                categoriesDetails: action.payload

            }

        default:
            return state;
    }

}

export default ContentReducer;