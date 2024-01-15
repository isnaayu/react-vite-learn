import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduce";

const Store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default Store