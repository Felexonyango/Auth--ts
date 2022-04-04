import { createSlice,createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IpostState {
  posts: any[] 
  status: boolean |any;
}

const initialState : IpostState = {
  posts: [],
  status:null
 

};

 export const fetchPosts:any = createAsyncThunk(
    'post/fetchPosts',
    async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
    }
  )

  export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers:{
      [fetchPosts.pending]:(state:any,action:PayloadAction<{posts:string[];status:boolean}>) =>{
        state.status = 'pending';
      },
      [fetchPosts.fullfilled]:(state:any,action:PayloadAction<{ posts:string[]; status: boolean; }>) =>{
        state.posts= action.payload.posts
        state.status = 'success';
      },
      [fetchPosts.rejected]:(state:any,action:PayloadAction<{posts:string[]; status: boolean}>) =>{
        state.status = 'rejected';
      }
    
    }

  })
  export default postSlice.reducer



  