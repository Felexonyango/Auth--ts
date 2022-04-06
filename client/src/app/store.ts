import { configureStore } from '@reduxjs/toolkit'
 import { authApi } from '../features/auth/authApi';
//  import AuthReducer from "../features/auth/authSlice"
 import { userApi } from '../features/auth/userApi';
export const store = configureStore({
  reducer: {
      // user:AuthReducer,
     [authApi.reducerPath]: authApi.reducer,
     [userApi.reducerPath]: userApi.reducer
  },
  
 middleware :(getDefaultMiddleware)=>
 getDefaultMiddleware().concat(
   authApi.middleware,
   userApi.middleware
   
   )
});




export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

