import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import root from '../RootReducer/ContentReducer';
import thunk from 'redux-thunk';




const store = createStore(root, applyMiddleware(logger, thunk));
export default store;