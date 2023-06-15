import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import inventoryService from './inventoryService'


 

const initialState = { 
  data:   [],
  isError: false,
  isSuccess: false,
  isLoading: false, 
  message: '',
  error: '',

  getdata:   [],
  getisError: false,
  getisSuccess: false,
  getisLoading: false, 
  getmessage: '',
  geterror: '',

  viewdata:   [],
  viewisError: false,
  viewisSuccess: false,
  viewisLoading: false,
  viewuserToken:null,
  viewmessage: '',
  viewerror: '',

  updatedata:   [],
  updateisError: false,
  updateisSuccess: false,
  updateisLoading: false,
  updateuserToken:null,
  updatemessage: '',
  updateerror: '',

  uploaddata:   [],
  uploadisError: false,
  uploadisSuccess: false,
  uploadisLoading: false,
  uploaduserToken:null,
  uploadmessage: '',
  uploaderror: '',

 
}



 

 
export const createInventory = createAsyncThunk('inventory/createInventory', async (data, thunkAPI) => {
  try {
    return await inventoryService.createInventory(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

export const getInventory = createAsyncThunk('inventory/getInventory', async (data, thunkAPI) => {
  try {
    return await inventoryService.getInventory( )

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})
export const viewInventory = createAsyncThunk('inventory/viewInventory', async (data, thunkAPI) => {
  try {
    return await inventoryService.viewInventory( data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})
export const updateInventory = createAsyncThunk('inventory/updateInventory', async (data, thunkAPI) => {
  try {
    // @ts-ignore
    return await inventoryService.updateInventory(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})
export const UploadInventorys = createAsyncThunk('inventory/UploadInventorys', async (data, thunkAPI) => {
  try {
    // @ts-ignore
    return await inventoryService.UploadInventorys(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

 

 
export const authSlice:any = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    reset: (state) => {   

      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

      state.getisLoading = false
      state.getisSuccess = false
      state.getisError = false
      state.getmessage = '' 

      state.viewisLoading = false
      state.viewisSuccess = false
      state.viewisError = false
      state.viewmessage = '' 

      state.updateisLoading = false
      state.updateisSuccess = false
      state.updateisError = false
      state.updatemessage = '' 

      state.uploadisLoading = false
      state.uploadisSuccess = false
      state.uploadisError = false
      state.uploadmessage = '' 
 
    },
  
  },
  extraReducers: (builder) => {
    builder 
      
     	.addCase(createInventory.pending, (state:any) => {
				state.isLoading = true
			})
			.addCase(createInventory.fulfilled, (state: any, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.data = action.payload?.data
			})
			.addCase(createInventory.rejected, (state: any, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.data = null
      })
      
     	.addCase(getInventory.pending, (state:any) => {
				state.getisLoading = true
			})
			.addCase(getInventory.fulfilled, (state: any, action) => {
				state.getisLoading = false
				state.getisSuccess = true
				state.getdata = action.payload?.data
			})
			.addCase(getInventory.rejected, (state: any, action) => {
				state.getisLoading = false
				state.getisError = true
				state.getmessage = action.payload
				state.getdata = null
      })
      

     	.addCase(viewInventory.pending, (state:any) => {
				state.viewisLoading = true
			})
			.addCase(viewInventory.fulfilled, (state: any, action) => {
				state.viewisLoading = false
				state.viewisSuccess = true
				state.viewdata = action.payload?.data
			})
			.addCase(viewInventory.rejected, (state: any, action) => {
				state.viewisLoading = false
				state.viewisError = true
				state.viewmessage = action.payload
				state.viewdata = null
      })
      
     	.addCase(updateInventory.pending, (state:any) => {
				state.updateisLoading = true
			})
			.addCase(updateInventory.fulfilled, (state: any, action) => {
				state.updateisLoading = false
				state.updateisSuccess = true
				state.updatedata = action.payload?.data
			})
			.addCase(updateInventory.rejected, (state: any, action) => {
				state.updateisLoading = false
				state.updateisError = true
				state.updatemessage = action.payload
				state.updatedata = null
      })
      
     	.addCase(UploadInventorys.pending, (state:any) => {
				state.uploadisLoading = true
			})
			.addCase(UploadInventorys.fulfilled, (state: any, action) => {
				state.uploadisLoading = false
				state.uploadisSuccess = true
				state.uploaddata = action.payload?.data
			})
			.addCase(UploadInventorys.rejected, (state: any, action) => {
				state.uploadisLoading = false
				state.uploadisError = true
				state.uploadmessage = action.payload
				state.uploaddata = null
			})

      
      
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer