import axios from 'axios';

export default class AccountServices {
  
  getAllUsers() {
    return axios.get(`/accounts/clients/${muniId}`);
  }

  getUserDetails(userId) { 
    return axios.get(`/accounts/clients/${userId}`);
  }
  
}
