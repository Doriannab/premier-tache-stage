 export function getUserDetails(){
   const userDataString = localStorage.getItem('toDOAppUser');
    const user = JSON.parse(userDataString);
    return user;
 }     