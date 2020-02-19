import baseRequest from '../../_core';

const applicants = {
  getCandidates: params =>
    baseRequest.get(`/getOneCandi?jobAd=${params.jobId}`),

  getAcceptedCandidates: params =>
    baseRequest.get(`/getOneAccepted?jobAd=${params.jobId}`),

  acceptUser: params =>
    baseRequest.post('/postAcc', {
      jobAd: params.jobId,
      acceptedName: params.userId
    }),
  getUser: params => baseRequest.get(`/get/userinfo?id=${params.userId}`)
};

export default applicants;
