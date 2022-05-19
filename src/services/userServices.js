import axios from 'axios';

export default class AccountServices {
  
  getAllUsers() {
    return axios.get(`https://dummyjson.com/users`);
  }

  getUserDetails(userId) { 
    return axios.get(`https://dummyjson.com/users/${userId}`);
  }
  
}
