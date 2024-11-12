import { configureStore } from "@reduxjs/toolkit";
import { sideBartoggleSlice} from "./reducers/SideBarToggleSlice";


export const store = configureStore({
    reducer:{
        sidebarToggle:sideBartoggleSlice
    }
})