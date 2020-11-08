import baseRequest from '../_core/index';
import { loadState } from '../_core/localStorage';

const statatisticsService = {
  age: num => {
    return baseRequest
      .get(`/get/UsersDepenedsOnAge/:age?${num}`, loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  city: params => {
    return baseRequest
      .get(
        `get/UsersDepenedsOnArea?city=${params.city_id}&country=${params.country_id}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  major: params => {
    return baseRequest
      .get(
        `/get/UsersDepenedsOnMajor/?major=${params.major}&spMajor=${params.spMajor}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getDataDependCityAndMajor: params => {
    return baseRequest
      .get(
        `/get/UsersDepenedsOnAreaAndMajor/?country=${params.country}&city=${params.city}&major=${params.major}&spMajor=${params.spMajor}`,
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  growth: () => {
    return baseRequest
      .get('/get/growthRate', loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  allCountries: () => {
    return baseRequest.get('/getcountry', loadState()).then(countries => {
      return countries.map(elm => {
        return {
          id: elm._id,
          value: elm.countryName,
          label: elm.countryName
        };
      });
    });
  },
  allMajors: () => {
    return baseRequest
      .get('/get/majors?type=major', loadState())
      .then(majors => {
        return JSON.parse(majors.public_Major).map(value => {
          return {
            id: value._id,
            value: value.majorName,
            label: value.majorName,
            key: value.key
          };
        });
      });
  },
  getAllCompanyMajors: () => {
    return baseRequest
      .get('/getsectors?type=sector', loadState())
      .then(majors => {
        return JSON.parse(majors.sectors).map(value => {
          return {
            id: value._id,
            value: value.sectorName,
            label: value.sectorName,
            key: value.key
          };
        });
      });
  },
  sMajor: majorId => {
    return baseRequest
      .get(`/get/spMajors?id=${majorId}`, loadState())
      .then(specialMajor => {
        return specialMajor.map(elm => {
          return {
            id: elm._id,
            value: elm.majorName,
            label: elm.majorName
          };
        });
      });
  },
  getCompanySMajor: () => {
    return baseRequest
      .get('/getspec?type=sMajor', loadState())
      .then(specialMajor => {
        return JSON.parse(specialMajor.Cs).map(elm => {
          return {
            id: elm._id,
            value: elm.specialistName,
            label: elm.specialistName
          };
        });
      });
  },
  companiesInfo: () => {
    return baseRequest
      .get('/get/companiesInfo')
      .then(companiesInfo => companiesInfo);
  },
  allCities: () => {
    return baseRequest.get('/getcity?type=city').then(cityData => {
      return JSON.parse(cityData.cities).map(elm => {
        return {
          id: elm._id,
          value: elm.cityName,
          label: elm.cityName
        };
      });
    });
  },
  getAllCompaniesBSpecialist: params => {
    return baseRequest
      .get(
        `/get/searchCompanyByCompanySpecialist/?CompanySp=${params.CompanySp}`
      )
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompaniesBSector: params => {
    return baseRequest
      .get(`/get/searchCompanyBySector/?sectorName=${params.sectorName}`)
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompanies: () => {
    return baseRequest.get('/get/allCompanies').then(companies => {
      return companies.map(value => {
        return {
          id: value._id,
          value: value.companyName,
          label: value.companyName
        };
      });
    });
  },
  getCompanyProjects: params => {
    return baseRequest
      .get(`/getprojectsById/?_id=${params.id}`)
      .then(projects => {
        return projects.map(elm => {
          return {
            id: elm._id,
            value: elm.projectName,
            label: elm.projectName
          };
        });
      })
      .catch(e => console.log(e));
  },
  getAllUniversities: () => {
    return baseRequest
      .get('/get/allUniversty')
      .then(result => {
        return result.map(elm => {
          return {
            id: elm._id,
            value: elm.universtyName,
            label: elm.universtyName
          };
        });
      })
      .catch(e => console.log(e));
  },
  SearchUsersJobCategory: () => baseRequest.get('/SearchUsersJobCategory'),
  SearchUsersFilter: params => baseRequest.post('/SearchUsersFilter', params)
};

export default statatisticsService;
