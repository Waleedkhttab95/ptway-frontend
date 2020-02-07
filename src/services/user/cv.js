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
  },
  getinformation: () => {
    return baseRequest.get('/getuserinfo/edit').then(result => result);
  },
  updateCV: params => {
    const {
      fullName,
      gender,
      mobile,
      birthDate,
      social_Status,
      languages,
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      about,
      per_skill
    } = params;
    return baseRequest
      .put('/put/userinfo', {
        fullName,
        gender,
        mobile,
        birthDate,
        social_Status,
        languages,
        city,
        country,
        public_Major: public_major,
        universty: university,
        spMajor: s_Major,
        education_degree,
        skills: skill,
        personal_Skills: per_skill,
        about
      })
      .then(result => result);
  }
};

export default CV;
