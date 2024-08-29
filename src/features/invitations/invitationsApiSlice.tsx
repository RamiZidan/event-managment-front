import { apiSlice } from "../../app/api/apiSlice";
import { convertToFormData } from "../../functions/helpers";


// logic on auth route (register,login,logout)

export const invitationsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getInvitations : builder.query({
            query: (filters) => {
                filters = convertToFormData(filters);
                return {
                    url: `/invitations?${filters}`,
                    method: 'GET'
                }
            },
            providesTags:['invitations']
        }),
        getInvitationById : builder.query({
            query: (id:any) => ({
                url: `/invitations/${id}`,
                method:'GET', 
            })
        }),
        deleteInvitations: builder.mutation({
            query: (data)=>({
                url:`/invitations`,
                method:'DELETE',
                body:data
            }),
            invalidatesTags:['invitations']
        }),
        createPublicInvitation: builder.mutation({
            query: (data)=>({
                url:`/invitations/public`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['invitations']
        }),
        createPublicInvitationFromVisitor: builder.mutation({
            query: (data)=>({
                url:`/inv/public`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['invitations']
        }),

        createPrivateInvitation: builder.mutation({
            query: (data)=>({
                url:`/invitations/private`,
                method:'POST',
                body: data
            }),
            invalidatesTags:['invitations']
        }),
        updatePublicInvitation: builder.mutation({
            query: (data)=>({
                url:`/invitations/public/${data.id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags:['invitations']
        }),

        upatePrivateInvitation: builder.mutation({
            query: (data)=>({
                url:`/invitations/private/${data.id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags:['invitations']
        }),
    })
})


export const {
    useCreatePrivateInvitationMutation,
    useCreatePublicInvitationMutation,
    useDeleteInvitationsMutation,
    useGetInvitationByIdQuery,
    useGetInvitationsQuery,
    useUpatePrivateInvitationMutation,
    useUpdatePublicInvitationMutation

} = invitationsApiSlice