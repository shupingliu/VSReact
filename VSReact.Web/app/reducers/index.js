import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses, // shorthand property names
    authors
});

export default rootReducer;