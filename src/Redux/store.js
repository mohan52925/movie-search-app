import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";


const movieStore =configureStore({
    reducer:{
        movie:MovieReducer
    }
})

export default movieStore;