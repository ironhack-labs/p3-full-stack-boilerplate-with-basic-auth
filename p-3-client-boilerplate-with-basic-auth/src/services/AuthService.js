import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true
});

const AUTH_SERVICE = {
  signup(userData) {
    return service
      .post('/api/signup', userData)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  login(userData) {
    return service
      .post('/api/login', userData)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  logout() {
    return service
      .post('/api/logout', {})
      .then(() => Promise.resolve())
      .catch(error => Promise.reject(error));
  },
  getUser() {
    return service
      .get('/api/isLoggedIn')
      .then(response => {
        const { userFromDB } = response.data;
        return Promise.resolve(userFromDB);
      })
      .catch(error => Promise.reject(error));
  }
};

export default AUTH_SERVICE;
