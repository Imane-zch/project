 //send get quuery to the MongoDB for user details
 
 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

 
 export const profileApi = createApi({
    
   reducerPath: 'api',
 
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/', 


   prepareHeaders: (headers, {getState}) => {
        
    
     const token = getState().auth.value
    

        if (token) {
         headers.set('authorization', `Bearer ${token}`)
         }
     
         return headers
   }
}),

  
   endpoints: builder => ({
     getUser: builder.query({
      
       query: () => '/api/user'
     })
   })
 })


 export const { useGetUserQuery } = profileApi;