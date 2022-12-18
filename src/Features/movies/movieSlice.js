import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { MovieApiKey } from '../../components/common/MovieApiKey';
import movieApi from '../../components/common/movieApi';


export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async(movieText)=>{
    const response =await movieApi.get(`?apiKey=${MovieApiKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log(`error ${err}`)
      });

      return response.data

});

export const fetchAsyncSeries=createAsyncThunk('movies/fetchAsyncSeries',async(seriesText)=>{
    const response =await movieApi.get(`?apiKey=${MovieApiKey}&s=${seriesText}&type=series`)
      .catch((err)=>{
        console.log(`error ${err}`)
      });

      return response.data

})
export const fetchAsyncSinglMovie=createAsyncThunk('movies/fetchAsyncSinglMovie' , async(id)=>{
    const response =await movieApi.get(`?apiKey=${MovieApiKey}&i=${id}&Plot=full`)
    .catch((err)=>{
      console.log(`error ${err}`)
    });

    return response.data
})




const initialState={
    movies:{},
    shows:{},
    singleData:{},
};

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
         addMovies:(state,action)=>{
            console.log(action,"actions")
            state.movies = action.payload
         },
         clearAsyncSingleMovie:(state,action)=>{
            state.singleData={}
         }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("in pending state")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("in fulfilled state")
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("in rejected state")
        },
        [fetchAsyncSeries.fulfilled]:(state,{payload})=>{
            console.log("in fulfilled state")
            return {...state,shows:payload}
        },
        [fetchAsyncSinglMovie.pending]:(state,{payload})=>{
            console.log("in pending state")
            
        },
        [fetchAsyncSinglMovie.fulfilled]:(state,{payload})=>{
            console.log("in fulfilled state")
            return {...state,singleData:payload}
        },
        [fetchAsyncSinglMovie.rejected]:(state,{payload})=>{
            console.log("in rejected state")
            
        },
        

    }
})


export const {addMovies,clearAsyncSingleMovie}= movieSlice.actions;

export const getMovies=(state)=>state.movies.movies;
export const getAllShows =(state)=>state.movies.shows;
export const getSingleDetails=(state)=>state.movies.singleData;
export default movieSlice.reducer;