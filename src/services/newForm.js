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
  }
};

export default newForm;
