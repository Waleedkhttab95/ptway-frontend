import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const ads = {
  getAllJobAd: () => {
    return baseRequest
      .get('/getjobs')
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllProjects: () => {
    return baseRequest
      .get('/getAllProjects', loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllContracts: () => {
    return baseRequest
      .get('/getcontracts', loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  getJob: params => {
    return baseRequest
      .get(`/preview/getjob/?id=${params.id}`, loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  getJobByEmail: params => {
    return baseRequest
      .get(`/getjobsByEmail/?email=${params.email}`, loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  deleteJob: params => {
    return baseRequest
      .delete(`/deletejob/?id=${params.id}`, loadState())
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  updateJob: params => {
    return baseRequest
      .put(
        '/put/job',
        {
          id: params.id,
          contract: params.contract,
          job_Name: params.job_Name,
          country: params.country,
          city: params.city,
          work_hours: params.work_hours,
          work_days: params.work_days,
          salary: params.salary,
          descreption: params.descreption,
          required_Number: params.required_Number
          //   startDate: params.startDate
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addJob: params => {
    return baseRequest
      .post(
        '/postjob',
        {
          contract: params.contract,
          project: params.project,
          job_Name: params.job_Name,
          descreption: params.descreption,
          job_skills: params.job_skills,
          country: params.country,
          city: params.city,
          public_Major: params.public_Major,
          startDate: params.startDate,
          work_hours: params.work_hours,
          work_days: params.work_days,
          salary: params.salary,
          gender: params.gender,
          personal_Skills: params.personal_Skills,
          required_Number: params.required_Number
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  exportJobs: params => {
    return baseRequest
      .get(`/get/phonenumbers/?jobAd=${params.jobId}`)
      .then(result => result)
      .catch(e => console.log(e));
  }
};

export default ads;
