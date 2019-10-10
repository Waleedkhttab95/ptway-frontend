import {combineReducers} from 'redux';
import user from './user';
import statistics from './statistics';

const reducers = combineReducers({
    user,
    statistics,
})
export default reducers;
