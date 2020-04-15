import Jobs from '../../../services/user/jobOffers';

export const jobOffers = pageNo => {
  return {
    type: 'JOB_OFFERS',
    payload: Jobs.getJobOffers(pageNo)
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
export const applyJob = params => {
  return {
    type: 'APPLY_JOB',
    payload: Jobs.applyJob(params)
  };
};
