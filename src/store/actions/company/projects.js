import projects from '../../../services/company/projects';

export const addNewProject = params => {
  return {
    type: 'ADD_PROJECT',
    payload: projects.addNewProject(params)
  };
};
export const allCotracts = params => {
  return {
    type: 'GET_ALL_COTRACTS',
    payload: projects.getCotracts(params)
  };
};
