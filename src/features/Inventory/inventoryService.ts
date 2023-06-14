
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

 
const createInventory = async (inputs: any) => {
	const { data }: any = await axios.post(baseUrl+ '/api/v1/inventory/create-inventory',inputs, config) 
	return data
}
const getInventory = async ( ) => { 
const { data }: any = await axios.get(baseUrl+ '/api/v1/inventory', config) 
return data
}

const viewInventory = async (id: any) => {
	const { data }: any = await axios.get(baseUrl+ `/api/v1/inventory/${id}`, config) 
	return data
}


const updateInventory = async (value: any,) => {
	const {inputs, id } = value
	// @ts-ignore
	const { data }:  any = await axios.patch(baseUrl+ `/api/v1/inventory/${id}`,inputs, config) 
	return data
}





const inventoryService = {
	createInventory,
	 getInventory,
	  viewInventory,
	  updateInventory,
}

export default inventoryService