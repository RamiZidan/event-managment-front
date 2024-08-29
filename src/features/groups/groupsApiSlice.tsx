import { apiSlice } from "../../app/api/apiSlice";
import { convertToFormData } from "../../functions/helpers";


// logic on auth route (register,login,logout)

export const groupsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getGroups : builder.query({
            query: (filters) => {
                filters = convertToFormData(filters);
                return {
                    url: `/groups?${filters}`,
                    method: 'GET',
                }
            },
            providesTags:['groups','invitations'],
        
        }),
        createGroup: builder.mutation({
            query: (data)=>({
                url:`/groups`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['groups','invitations']
        }),
        // getGroupById : builder.query({
        //     query: (id:any) => ({
        //         url: `/groups/${id}`,
        //         method:'GET', 
        //     })
        // }),
        deleteGroups : builder.mutation({
            query: (data)=>({
                url:`/groups`,
                method:'DELETE',
                body:data
            }),
            invalidatesTags:['groups']
        }),
        updateGroup: builder.mutation({
            query: (data)=>({
                url: `/groups/${data.id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags:['groups','invitations']
            
        }),
        
    })
})


export const {
    useCreateGroupMutation,
    useDeleteGroupsMutation,
    useGetGroupsQuery,
    useLazyGetGroupsQuery

} = groupsApiSlice