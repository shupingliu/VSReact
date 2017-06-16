import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {  // initialState here is good for server side rendering function
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}