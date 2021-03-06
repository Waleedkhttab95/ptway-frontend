import baseRequest from '../_core';
import { loadState } from '../_core/localStorage';

const companyStatistics = {
  companyBCountry: params => {
    return baseRequest
      .get(
        `get/companyBcountry?country=${params.country_id}&city=${params.city_id}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  companyBMajorOrSector: params => {
    return baseRequest
      .get(
        `/get/count/company?sector=${params.sector}&sp=${params.s_major}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  companyBCityMajor: params => {
    return baseRequest
      .get(
        `/get/company/country/sector?country=${params.country_id}&city=${params.city_id}&sector=${params.major_id}&sp=${params.smajor_id}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default companyStatistics;
