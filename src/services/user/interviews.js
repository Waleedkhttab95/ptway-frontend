import baseRequest from '../../_core';

const Interviews = {
  getInterviews: params => {
    return baseRequest
      .get(`/getUserAppointments? pageNo=${params.pageNo}`)
      .then(result => result);
  },
  getInterview: params =>
    baseRequest.get(`/getAppointment?id=${params.id}`).then(result => result),

  changeAppointmentStatus: params =>
    baseRequest
      .put('/changeappointmentstatus', { ...params })
      .then(result => result)
};

export default Interviews;
