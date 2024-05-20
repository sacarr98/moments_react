import axios from "axios";

axios.defaults.baseURL = 'https://moments-react-proj-af2ae8d26ea8.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;