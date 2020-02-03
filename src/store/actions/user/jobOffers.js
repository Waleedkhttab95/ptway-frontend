import Jobs from '../../../services/user/jobOffers';

export const jobOffers = () => {
  return {
    type: 'JOB_OFFERS',
    payload: Jobs.getJobOffers()
  };
};
