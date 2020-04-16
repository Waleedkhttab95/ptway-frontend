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
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      about,
      per_skill,
      study_degree,
      language,
      personal_web,
      facebook,
      linkedin,
      twitter,
      file,
      jobCategory,
      education_level,
      userStatus,
      availabilityStatus,
      hoppies
    } = params;

    let formData = new FormData();
    if (skill != null) {
      for (var i = 0; i < skill.length; i++) {
        formData.append('skills[]', skill[i]);
      }
    } else {
      formData.append('skills', skill);
    }
    if (hoppies != null) {
      for (var i = 0; i < hoppies.length; i++) {
        formData.append('hoppies[]', hoppies[i]);
      }
    } else {
      formData.append('hoppies', hoppies);
    }

    if (per_skill != null) {
      for (var i = 0; i < per_skill.length; i++) {
        formData.append('personal_Skills[]', per_skill[i]);
      }
    } else {
      formData.append('personal_Skills', per_skill);
    }

    if (language != null) {
      for (var i = 0; i < language.length; i++) {
        formData.append('languages[]', language[i]);
      }
    } else {
      formData.append('languages', language);
    }
    if (jobCategory != null) {
      for (var i = 0; i < jobCategory.length; i++) {
        formData.append('jobCategory[]', jobCategory[i]);
      }
    } else {
      formData.append('jobCategory', jobCategory);
    }

    formData.append('image', file);
    formData.append('fullName', fullName);
    formData.append('gender', gender);
    formData.append('mobile', mobile);
    formData.append('birthDate', birthDate);
    formData.append('social_Status', social_Status);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('public_Major', public_major);
    formData.append('universty', university);
    formData.append('spMajor', s_Major);
    formData.append('education_degree', education_degree);
    formData.append('education_level', education_level);
    formData.append('about', about);
    formData.append('study_degree', study_degree);
    formData.append('personal_web', personal_web);
    formData.append('facebook', facebook);
    formData.append('linkedin', linkedin);
    formData.append('twitter', twitter);
    formData.append('userStatus', userStatus);
    formData.append('availabilityStatus', availabilityStatus);

    return baseRequest.put('/put/userinfo', formData).then(result => {

      return result;
    });
  },
  jobCategories: () =>
    baseRequest.get('/get/allJobCategory').then(result => result)
};

export default CV;
