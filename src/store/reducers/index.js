import {combineReducers} from 'redux';
import user from './user';
import statistics from './statistics';
// import university from './university';
const reducers = combineReducers({
    user,
    statistics
    // university
})
export default reducers;
