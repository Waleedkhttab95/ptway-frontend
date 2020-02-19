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
    })
};

export default companyProfile;
