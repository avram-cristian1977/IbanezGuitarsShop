import {configureStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const eurCurrency = createAsyncThunk("eur/eurCurrency",
async () => {
    try  {
        const response = await fetch("https://freecurrencyapi.net/api/v2/latest?apikey=86af7f20-3666-11ec-a4c8-1f589826ceba")
        const data = await response.json()
        return data
    }
    catch (error) {
     throw Error(error)
 }
 }
) 

const eurCurrencySlice = createSlice({
    name : "eur",
    initialState:{
        isLoading:false,
        eur:null,
        error:false
    },
    reducers:{},
    extraReducers:{
        [eurCurrency.pending] : (state) =>{
            state.isLoading = "PENDING"
        },
        [eurCurrency.fulfilled]: (state, action) => {
            state.isLoading = "FULFILLED";
            state.eur = action.payload

        },
        [eurCurrency.rejected]: (state) => {
            state.isLoading = "REJECTED";
            state.error = true
        }

    }
})



const initialState = localStorage.getItem("token")

export const authSlice = createSlice({
    name:"auth",
    initialState:{token:initialState},
    reducers:{
        login:(state, action) => {
           state.token = action.payload
           localStorage.setItem("token", state.token)
        },
        logout:(state)=>{
           state.token = null
           localStorage.removeItem("token")
        }
    }
})

export const authActions = authSlice.actions

 const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        eur :eurCurrencySlice.reducer
    }
})

export default store