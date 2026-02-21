import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['User', 'Post'], // Example tags
    endpoints: (builder) => ({
        // Define your endpoints here
        // Example:
        // getItems: builder.query({
        //   query: () => '/items',
        //   providesTags: ['Item'],
        // }),
    }),
});

export const {
    // Export hooks for usage in functional components
    // useGetItemsQuery, 
} = apiSlice;
