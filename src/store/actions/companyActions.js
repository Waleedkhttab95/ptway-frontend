import companyStatistics from '../../services/comanyStatistics';

export const companyBCountry = params => {
  return {
    type: 'COMPANY_COUNTRY_STATISTIC',
    payload: companyStatistics.companyBCountry(params)
  };
};

export const companyBMajor = params => {
  return {
    type: 'COMPANY_MAJOR_STATISTIC',
    payload: companyStatistics.companyBMajorOrSector(params)
  };
};

export const companyBCityMajor = params => {
  return {
    type: 'COMPANY_CITY_MAJOR_STATISTIC',
    payload: companyStatistics.companyBCityMajor(params)
  };
};
