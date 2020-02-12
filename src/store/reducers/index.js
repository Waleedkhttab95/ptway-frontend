import { combineReducers } from 'redux';
import user from './user';
import statistics from './statistics';
import companyStatistics from './companyStatistics';
import adminSearch from './search';
import adminCRUD from './adminCRUD';
import adminContent from './adminContentSection';
import generalStatistics from './generalStatistics';
import userHome from './userSection/home';
import jobOffers from './userSection/jobOffers';
import userSetting from './userSection/setting';

const reducers = combineReducers({
  user,
  statistics,
  companyStatistics,
  search: adminSearch,
  adminSer: adminCRUD,
  adminContent,
  generalStatistics,
  userS: userHome,
  jobOffers,
  userSetting
});
export default reducers;
