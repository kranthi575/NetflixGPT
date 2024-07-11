//creating redux store
//import slice reducers and add to reducer in appStore
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const appStore=configureStore(
    {
        reducer:{
            user:userReducer
        }
    }
);

export default appStore;