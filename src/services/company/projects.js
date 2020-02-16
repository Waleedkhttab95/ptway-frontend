import baseRequest from '../../_core';

const projects = {
  addNewProject: params =>
    baseRequest.post('/postproject', {
      projectName: params.projectName,
      projectDescription: params.projectDescription
    }),
  getCotracts: () => baseRequest.get('/getcontracts'),
  getProjects: () => baseRequest.get('/getprojects'),
  addNewAd: params => {
    let personal_Skills;
    if (params.personalSkills != null) {
      for (var i = 0; i < params.personalSkills.length; i++) {
        personal_Skills = params.personalSkills[i];
      }
    } else {
      personal_Skills = params.personalSkills;
    }
    return baseRequest.post('/postjob', {
      contract: params.contract,
      project: params.project,
      job_Name: params.jobTitle,
      startDate: params.date,
      country: params.country,
      city: params.city,
      work_hours: params.workHours,
      descreption: params.jobDescription,
      work_days: params.workDays,
      salary: params.salary,
      gender: params.gender,
      personal_Skills,
      required_Number: params.required_Number
    });
  }
};

export default projects;
