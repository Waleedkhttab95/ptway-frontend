import baseRequest from '../../_core';

const CV = {
  getSkills: () => {
    return baseRequest.get('/get/skills').then(result => result);
  },
  getPersonalSkills: () => {
    return baseRequest.get('/get/p_skills').then(result => result);
  },
  getMajor: () => {
    return baseRequest.get('/get/majors').then(result => result);
  },
  getSubMajor: params => {
    return baseRequest
      .get(`/get/spMajors?id=${params.id}`)
      .then(result => result);
  },
  getUniversity: () => {
    return baseRequest.get('/get/universty').then(result => result);
  }
};

export default CV;
