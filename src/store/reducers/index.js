import {combineReducers} from 'redux';
import user from './user';
import statistics from './statistics';
import companyStatistics from './companyStatistics'
const reducers = combineReducers({
    user,
    statistics,
    companyStatistics
})
export default reducers;
