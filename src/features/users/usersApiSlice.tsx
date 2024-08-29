import { apiSlice } from "../../app/api/apiSlice";
import { convertToFormData } from "../../functions/helpers";


// logic on auth route (register,login,logout)

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers : builder.query({
            query: (filters) => {
                filters = convertToFormData(filters);
                return {
                    url: `/users?${filters}`,
                    method: 'GET',
                }
            },
            providesTags:['users']
        }),
        createUser: builder.mutation({
            query: (data)=>({
                url:`/users`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['users','invitations']
        }),
        getUserById : builder.query({
            query: (id:any) => ({
                url: `/users/${id}`,
                method:'GET', 
            })
        }),
        deleteUsers : builder.mutation({
            query: (data)=>({
                url:`/users`,
                method:'DELETE',
                body:data
            }),
            invalidatesTags:['users','invitations']
        }),
        updateUser: builder.mutation({
            query: (data)=>({
                url: `/users/${data.id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags:['users','invitations']
            
        }),
        getProfile: builder.query({
            query: ()=>({
               url: `profile`,
               method:'GET'
            })

        }),
        updateProfile: builder.mutation({
            query: (data)=>({
                url:`/profile`,
                method:'PUT',
                body: data 
            })
        }),
        updatePermissions:builder.mutation({
            query:({id , permissions })=>({
                url:`/users/${id}/permissions`,
                method:'PUT',
                body:{permissions}
            })
        })
        
    })
})


export const {
    useCreateUserMutation,
    useDeleteUsersMutation,
    useGetUsersQuery,
    useUpdateUserMutation,
    useGetUserByIdQuery,
    useUpdatePermissionsMutation

} = usersApiSlice