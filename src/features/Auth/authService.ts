
import axios from 'axios'  
import { baseUrl } from '../../shared/baseUrl';
 

 
// Login user 
const login = async (value: any) => { 
  
  const {data} = await axios.post(baseUrl + '/api/v1/auth/signin-user', value) 
  if (data) { 
    try {    
      localStorage.setItem('userin', JSON.stringify(data?.data));  
  } catch (e) {
     console.log(`isLoggedIn in error ${e}`)
  }
  }
  return data
}
   

// Logout user
export const logout = () => {
  localStorage.removeItem('userin')   
} 


// input 
const input = async ( ) => {  
  //  @ts-ignore  
    const Items = JSON.parse(localStorage.getItem('inputs'));
  return Items
}
  
  


const authService = { 
  logout,
  login, 
  input
}

export default authService
