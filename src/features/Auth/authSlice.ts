import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'  


 

const initialState = {
  

  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userToken:null,
  message: '',
  error: '',

  data:   [],
  isErrorinput: false,
  isSuccessinput: false,
  isLoadinginput: false,
  userTokeninput:null,
  messageinput: '',
  errorinput: '',

 
}



 

// Login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    return await authService.login(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

// Input
export const input = createAsyncThunk('auth/input', async ( input, thunkAPI) => {
  try {
    return await authService.input()
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})


// logout
export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {  

    

      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

      state.isLoadinginput = false
      state.isSuccessinput = false
      state.isErrorinput = false
      state.messageinput = '' 
    },
    
    logoutUser: state => {
      state.user = null
      localStorage.removeItem('user')  
    }
  },
  extraReducers: (builder) => {
    builder

      //  Login
      .addCase(login.pending, (state) => {
        state.isLoading = true
        
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.userToken = action.payload.accessToken
      })
      .addCase(login.rejected, (state:any, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        state.userToken = null
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null 
        state.userToken = null 
      })

      // Input
      .addCase(input.pending, (state) => {
        state.isLoading = true
        
      })
      .addCase(input.fulfilled, (state:any, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.data = action.payload 
      })
      .addCase(input.rejected, (state:any, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.data = [] 
      })

      
      
  },
})

export const { reset,   logoutUser } = authSlice.actions
export default authSlice.reducer