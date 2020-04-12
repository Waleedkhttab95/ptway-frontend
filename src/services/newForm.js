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
      ptwayMember: params.ptwayMember
    });
  }
};

export default newForm;
