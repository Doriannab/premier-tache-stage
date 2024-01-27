import axios from 'axios';


const SERVER_URL = 'https://run-web.onrender.com/';


const registerUser = (data)=>{
    return axios.post(SERVER_URL+'api/register',data);
}

const loginUser = (data)=>{
    return axios.post(SERVER_URL+'api/login',data); 
}


const AuthServices = {
    registerUser,
    loginUser
}

export default AuthServices;