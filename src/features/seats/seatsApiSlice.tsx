import { apiSlice } from "../../app/api/apiSlice";
import { convertToFormData } from "../../functions/helpers";


// logic on auth route (register,login,logout)

export const seatsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSeats : builder.query({
            query: (filters) =>  {
                filters = convertToFormData(filters);
                return {
                    url: `/seats?${filters}`,
                    method: 'GET',
                }
            },
            providesTags:['seats']
        }),
        getSeatHistory : builder.query({
            query: (id:any) => ({
                url: `/seats/${id}/history`,
                method:'GET', 
            }),
            providesTags:['seats']
        }),
        assignSeat : builder.mutation({
            query: (data) => ({
                url: `/seats/${data?.id}/assign`,
                method:'POST', 
                body: data
            }),
            invalidatesTags:['seats']
        }),
        getSeatsReport: builder.query({
            query:()=>({
                url:`/seats/reports`,
                method:'GET'
            })
        }),
        getSeatById: builder.query({
            query:(id)=>({
                url:`/seats/${id}`,
                method:'GET'
            })
        })
        
    })
})


export const {
    useAssignSeatMutation,
    useGetSeatHistoryQuery,
    useGetSeatsQuery,
    useGetSeatsReportQuery,
    useGetSeatByIdQuery

} = seatsApiSlice