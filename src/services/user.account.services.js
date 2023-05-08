import API from './webapi.services';
import {BASE_URL} from './urls';

export const getUser = async () => {

  try {

    return await API.get(`${BASE_URL}/users`).then(

      response => {
        return response.data;
      },

      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}


export const updateUser = async (param) => {

    try {
  
      return await API.put(`${BASE_URL}/users/${param.id}`, param).then(
  
        response => {
          return response.data;
        },
  
        error => {
          console.log(error);
          return null;
        }
      );
    } catch (error) {
      console.log(error);
      return null;
    }
}
export const deleteUser = async (id) => {

    try{
  
      return await API.delete(`${BASE_URL}/users/${id}`).then(
  
        response => {
          return response.data;
        },
  
        error => {
          console.log(error);
          return null;
        }
      );
    } catch (error) {
      console.log(error);
      return null;
    }
}