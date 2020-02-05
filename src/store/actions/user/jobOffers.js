import Jobs from '../../../services/user/jobOffers';

export const jobOffers = () => {
  return {
    type: 'JOB_OFFERS',
    payload: Jobs.getJobOffers()
  };
};
export const jobOffer = params => {
  return {
    type: 'JOB_OFFER',
    payload: Jobs.getJobOffer(params)
  };
};
export const companyDetails = params => {
  return {
    type: 'COMPANY_DETAILS',
    payload: Jobs.getCompany(params)
  };
};
