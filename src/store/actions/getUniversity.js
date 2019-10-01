import universityService from '../../services/universitiesServices';

const ActionTypes ={
GET_UNIVERSITY: 'GET_UNIVERSITY'
};

export const getUniversity =(id) =>{
 return {
     type: ActionTypes.GET_UNIVERSITY,
     payload: universityService.getUniversity(id)
 };
};