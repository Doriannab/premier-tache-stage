import axios from 'axios';
import { getUserDetails } from '../util/GetUser';


const SERVER_URL = 'https://run-web.onrender.com/api/todo';

const authHeaders = ()=>{
    let userToken = getUserDetails()?.token;
    return {headers:{'Autorization':userToken}}


}

const createToDo = (data)=>{
    return axios.post(SERVER_URL+'/create-to-do',data,authHeaders());
}



const ToDoServices = {
    createToDo
} 

export default ToDoServices;