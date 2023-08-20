import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movie",
    initialState:{
        movieData:[],
        name:"mohan"
    },
    reducers:{
        addDetails:(state,action)=>{
            // console.log(action)
            state.movieData=action.payload.Search;
        }
    }
})
export default MovieSlice.reducer
export const {addDetails} = MovieSlice.actions;