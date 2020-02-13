import baseRequest from '../../_core';

const projects = {
  addNewProject: params =>
    baseRequest.post('/postproject', {
      projectName: params.projectName,
      projectDescription: params.projectDescription
    }),
  getCotracts: () => baseRequest.get('/getcontracts')
};

export default projects;
