import baseRequest from '../../_core';

const companyProfile = {
  addCompanyInfo: params =>
    baseRequest.post('postcompanyinfo', {
      country: params.country,
      address: params.address,
      info: params.info,
      vision: params.vision,
      message: params.message,
      city: params.city,
      personal_web: params.personal_web,
      facebook: params.facebook,
      twitter: params.twitter,
      linkedin: params.linkedin
    }),
  updateCompanyProfile: params => {
    const {
      city,
      country,
      about,
      vision,
      message,
      address,
      personal_web,
      facebook,
      linkedin,
      twitter,
      image
    } = params;

    let formData = new FormData();

    formData.append('image', image);
    formData.append('vision', vision);
    formData.append('message', message);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('about', about);
    formData.append('personal_web', personal_web);
    formData.append('facebook', facebook);
    formData.append('linkedin', linkedin);
    formData.append('twitter', twitter);

    return baseRequest.put('/put/companyinfo', formData).then(result => {
      return result;
    });
  }
};

export default companyProfile;
