import baseRequest from '../../_core';

const applicants = {
  getCandidates: params =>
    baseRequest.get(
      `/getOneCandi?jobAd=${params.jobId}&pageNo=${params.pageNo}`
    ),

  getAcceptedCandidates: params =>
    baseRequest.get(`/getOneAccepted?jobAd=${params.jobId}`),

  acceptUser: params =>
    baseRequest.post('/postAcc', {
      jobAd: params.jobId,
      acceptedName: params.userId
    }),
  rejectUser: params =>
    baseRequest.put('/rejectCandidate', {
      id: params.id
    }),
  getUser: params =>
    baseRequest.get(`/get/userinfo?id=${params.userId}&jobAd=${params.jobId}`),
  getMoreCandidates: params =>
    baseRequest.get(
      `/getOneCandi?pageNo=${params.pageNo}&jobAd=${params.jobAd}`
    ),
  getMoreAcceptedCandidates: params =>
    baseRequest.get(
      `/getOneAccepted?pageNo=${params.pageNo}&jobAd=${params.jobAd}`
    ),
  addToFavList: params =>
    baseRequest.put('/addToFavList', {
      id: params.id
    }),
  getFavCandidates: params =>
    baseRequest.get(
      `/getFavCandidates?jobAd=${params.jobId}&pageNo=${params.pageNo}`
    )
};

export default applicants;
