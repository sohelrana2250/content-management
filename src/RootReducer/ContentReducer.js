import { combineReducers } from 'redux';
import ContentReducer from '../REDUX/ContentReducer';
import RegisterReducer from '../RegisterReducer/RegisterReducer';

const root = combineReducers({

    categories: ContentReducer,
    register: RegisterReducer
})

export default root;