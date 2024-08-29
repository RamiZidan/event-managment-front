import { apiSlice } from "../../app/api/apiSlice";
import { convertToFormData } from "../../functions/helpers";


// logic on auth route (register,login,logout)

export const surnamesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSurnames : builder.query({
            query: (filters) =>  {
                filters = convertToFormData(filters);
                return {
                    url: `/surnames?${filters}`,
                    method: 'GET',
                }
            },
            providesTags:['surnames']
        }),
        createSurname: builder.mutation({
            query: (data)=>({
                url:`/surnames`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['surnames','invitations']
        }),
        // getSurnameById : builder.query({
        //     query: (id:any) => ({
        //         url: `/surnames/${id}`,
        //         method:'GET', 
        //     })
        // }),
        deleteSurnames : builder.mutation({
            query: (data)=>({
                url:`/surnames`,
                method:'DELETE',
                body:data
            }),
            invalidatesTags:['surnames','invitations']
        }),
        updateSurname: builder.mutation({
            query: (data)=>({
                url: `/surnames/${data.id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags:['surnames','invitations']
            
        }),
        
    })
})


export const {
    useCreateSurnameMutation,
    useDeleteSurnamesMutation,
    useGetSurnamesQuery,
    useUpdateSurnameMutation

} = surnamesApiSlice