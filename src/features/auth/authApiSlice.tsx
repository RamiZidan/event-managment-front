import { apiSlice } from "../../app/api/apiSlice";


// logic on auth route (register,login,logout)

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: '/auth/register',
                method: 'POST',
                body: { ...data },
            })
        }),
        login: builder.mutation({
            query: data => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...data },
            }),
            invalidatesTags: ['auth']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'GET',
            })
        }),
        me: builder.mutation({
            query: () => ({
                url: '/auth/me',
                method:'POST', 
            })
        }),
        updateProfile: builder.mutation({
            query: data =>({
                url:'/user/update',
                method:'PUT',
                body: data
            })
        })
    })
})


export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useMeMutation,
    useUpdateProfileMutation
} = authApiSlice