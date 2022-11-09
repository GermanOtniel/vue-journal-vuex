import axios from 'axios';

const journalApi = axios.create({
  baseURL: 'https://vue-demos-345eb-default-rtdb.firebaseio.com'
});

export default journalApi;