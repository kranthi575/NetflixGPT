import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
//create appstore and add the created slices to this store
const appStore=configureStore(
    {
        //adding userSlice reducer
        reducer:{
            user:user
        }
    }
);
export default appStore;