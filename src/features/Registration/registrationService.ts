import axios from 'axios'  
import { baseUrl } from '../../shared/baseUrl';
 

	// @ts-ignore
const user = JSON.parse(localStorage.getItem("userin"));
 
// @ts-ignore
export const config = {
         headers: {
          "Content-Type": "application/json", 
           Authorization: `Bearer ${user?.token}`,
         },
  };   


 // Registration
const userRegistration = async (value:any) => {  
  const { data } = await axios.post(baseUrl+ '/api/v1/auth/register-user',value, config) 
  return data
}

 // Get All Reguser
const getallReguser = async () => {  
  const { data } = await axios.get(baseUrl+ '/api/v1/auth/users', config) 
  return data
}

 // Get Login User
const getLoginUser = async () => {  
  const { data } = await axios.get(baseUrl + '/api/v1/auth/current-user', config)  
 
  return data
}



const registrationSlice = { 
  userRegistration,
  getallReguser,
  getLoginUser
}

export default registrationSlice