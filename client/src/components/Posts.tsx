import React from 'react'

import {  useAppDispatch,useAppSelector} from '../app/hooks'

import { fetchPosts } from '../features/posts/postSlice';

const Posts = () => {

 const { posts } = useAppSelector((state) => state.post);
  const dispatch=useAppDispatch()
  dispatch(fetchPosts())


  return (
  <div>

    {posts?.map((k)=>(
  <div>{k.title} </div>

    ))}
  </div>
  )
}

export default Posts