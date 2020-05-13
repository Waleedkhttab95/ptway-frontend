import baseRequest from '../_core/index';

const newForm = {
  addInfo: params => {
    return baseRequest.post('postTempForm', {
      name: params.name,
      birthDate: params.birthDate,
      gender: params.gender,
      isSaudi: params.isSaudi,
      nationality: params.nationality,
      city: params.city,
      street: params.street,
      mobile: params.mobile,
      email: params.email,
      avilableCar: params.avilableCar,
      carType: params.carType,
      carModel: params.carModel,
      jobTitle: params.jobTitle,
      timeToDelivier: params.timeToDelivier,
      mobileOS: params.mobileOS,
      exp: params.exp,
      company: params.company,
      ptwayMember: params.ptwayMember,
      social: params.social
    });
  },
  deliveryData: params => {
    return baseRequest.post('/postTempForm2', {
      name: params.name,
      birthDate: params.birthDate,
      gender: params.gender,
      isSaudi: params.isSaudi,
      nationality: params.nationality,
      city: params.city,
      street: params.street,
      mobile: params.mobile,
      email: params.email,
      avilableCar: params.avilableCar,
      carType: params.carType,
      carModel: params.carModel,
      jobTitle: params.jobTitle,
      timeToDelivier: params.timeToDelivier,
      mobileOS: params.mobileOS,
      exp: params.exp,
      company: params.company,
      ptwayMember: params.ptwayMember
    });
  },
  contactUs: params =>
    baseRequest.post('/contactUs', {
      name: params.name,
      message: params.message,
      email: params.email
    }),
  deliveryCompany: ({
    name,
    company,
    supervisor,
    supervisorNumber,
    email,
    city,
    jobType,
    description,
    requiredStaff
  }) => {
    return baseRequest.post('/deliveryCompany', {
      name,
      company,
      supervisor,
      supervisorNumber,
      email,
      city,
      jobType,
      description,
      requiredStaff
    });
  },
  getUserNewJob: ({
    name,
    email,
    mobile,
    Cv,
    gender,
    Experience,
    lastCompany,
    lastJobPosition,
    YearsOfExperience,
    WorkingOutOfCity,
    jobTitle,
    Linkedin
  }) => {
    let formData = new FormData();
    formData.append('file', Cv);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('gender', gender);
    formData.append('Experience', Experience);
    formData.append('lastCompany', lastCompany);
    formData.append('lastJobPosition', lastJobPosition);
    formData.append('YearsOfExperience', YearsOfExperience);
    formData.append('WorkingOutOfCity', WorkingOutOfCity);
    formData.append('jobTitle', jobTitle);
    formData.append('Linkedin', Linkedin);
    return baseRequest.post('/jobless', formData);
  },
  getCompanyNewJob: ({
    name,
    mobile,
    email,
    companyName,
    companyLocation,
    companySector,
    companyType,
    companySize,
    companyInfo,
    companyWebsite,
    jobTitle,
    YearsOfExperience,
    contract
  }) => {
    return baseRequest.post('/companyjob', {
      name,
      mobile,
      email,
      companyName,
      companyLocation,
      companySector,
      companyType,
      companySize,
      companyInfo,
      companyWebsite,
      jobTitle,
      YearsOfExperience,
      contract
    });
  }
};

export default newForm;
