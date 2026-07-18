import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./Slice";

const Store = configureStore(
    {
        reducer:{
            counts:countSlice.reducer
        }
    }
)

export default Store