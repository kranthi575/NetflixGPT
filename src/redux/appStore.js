//creating redux store
//import slice reducers and add to reducer in appStore
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import secondCtrlReducer from './secondCtrlSlice';

const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer,
            secondCtrl:secondCtrlReducer
        }
    }
);

export default appStore;