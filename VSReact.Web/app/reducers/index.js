/* eslint-disable import/default */
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, // shorthand property names
    authors,
    ajaxCallsInProgress
});

export default rootReducer;