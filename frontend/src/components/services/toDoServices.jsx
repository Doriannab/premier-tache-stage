import axios from 'axios';
import { getUserDetails } from '../util/GetUser';


const SERVER_URL = 'http://localhost:5000/api/todo';

const authHeaders = ()=>{
    let userToken = getUserDetails()?.token;
    return {headers:{'Authorization':userToken}}


}

const createToDo = (data)=>{
    return axios.post(SERVER_URL+'/create-to-do',data,authHeaders());
}

 const getAllToDo= (userId)=>{
     return axios.get(SERVER_URL+'/get-all-to-do/'+userId,authHeaders());
 }

// const getAllToDo= (userId, token) => {
//     return axios.get(SERVER_URL + '/get-all-to-do/' + userId, {
//         headers: {
//             Authorization: `Bearer ${token}` // Ajouter le token à l'en-tête de la requête
//         }
//     });
// }


const ToDoServices = {
    createToDo,
    getAllToDo
} 

export default ToDoServices;