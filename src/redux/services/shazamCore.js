import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','397d3acd44msh07433e0783a21d0p19c4b8jsne72b778459cd');
                return headers;
            },
        }),
        endpoints: (builder)=> ({
            getTopCharts: builder.query({query: ()=> '/charts/world'}),

        })
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;



    