import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import registrationService from './registrationService'


const initialState = {
  data:   [],
  isError: false,
  isSuccess: false,
  isLoading: false, 
  message: '',
  error: '', 

  dataAll:   [],
  isErrorAll: false,
  isSuccessAll: false,
  isLoadingAll: false, 
  messageAll: '',
  errorAll: '', 

  dataLoginUser:   [],
  isErrorLoginUser: false,
  isSuccessLoginUser: false,
  isLoadingLoginUser: false, 
  messageLoginUser: '',
  errorLoginUser: '', 
}

 

// Registration User
export const userRegistration = createAsyncThunk('register/userRegistration', async ( value,thunkAPI) => {
  try { 
    return await registrationService.userRegistration(value)
  } catch (error:any) {
    const message =
      error.response &&
        error.response.data ?
        error.response.data.errors[0].message :
        error.message  
    return thunkAPI.rejectWithValue(message)
  }
})
 
 
// Registration User
export const getallReguser = createAsyncThunk('register/getallReguser', async (  data,thunkAPI) => {
  try { 
    return await registrationService.getallReguser()
  } catch (error:any) {
    const message =
      error.response &&
        error.response.data ?
        error?.response?.data?.errors[0]?.message :
        error?.message  
    
    return thunkAPI.rejectWithValue(message)
  }
})
 

// Get Login User
export const getLoginUser = createAsyncThunk('register/getLoginUser', async (  data,thunkAPI) => {
  try { 
    return await registrationService.getLoginUser(  )
  } catch (error:any) {
    const message =
      error.response &&
        error.response.data ?
        error?.response?.data?.errors[0]?.message :
        error?.message  
    
    return thunkAPI.rejectWithValue(message)
  }
})
 



export const registrationSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    reset: (state) => {  
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''  

      state.isLoadingAll = false
      state.isSuccessAll = false
      state.isErrorAll = false
      state.messageAll = ''  
      
      state.isLoadingLoginUser = false
      state.isSuccessLoginUser = false
      state.isErrorLoginUser = false
      state.messageLoginUser = ''  
    },
    
     
  },
  extraReducers: (builder) => {
    builder  
    .addCase(userRegistration.pending, (state) => {
        state.isLoading = true 
      })
      .addCase(userRegistration.fulfilled, (state:any, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.data = action.payload 
      })
      .addCase(userRegistration.rejected, (state:any, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.data = [] 
      })
      

    .addCase(getallReguser.pending, (state) => {
        state.isLoadingAll = true 
      })
      .addCase(getallReguser.fulfilled, (state:any, action) => {
        state.isLoadingAll = false
        state.isSuccessAll = true
        state.dataAll = action.payload?.data 
      })
      .addCase(getallReguser.rejected, (state:any, action) => {
        state.isLoadingAll = false
        state.isErrorAll = true
        state.messageAll = action.payload
        state.dataAll = [] 
      })

    .addCase(getLoginUser.pending, (state) => {
        state.isLoadingLoginUser = true 
      })
      .addCase(getLoginUser.fulfilled, (state:any, action) => {
        state.isLoadingLoginUser = false
        state.isSuccessLoginUser = true
        state.dataLoginUser = action.payload 
      })
      .addCase(getLoginUser.rejected, (state:any, action) => {
        state.isLoadingLoginUser = false
        state.isErrorLoginUser = true
        state.messageLoginUser = action.payload
        state.dataLoginUser = [] 
      })
      
  },
})

export const { reset } = registrationSlice.actions
export default registrationSlice.reducer