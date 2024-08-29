import React from 'react'
import CrudTable from '../../components/CrudTable'
import { allInvitationColumn } from '../../constants/columns'
import { useDeleteInvitationsMutation, useGetInvitationsQuery } from '../../features/invitations/invitationsApiSlice';
import Loader from '../../components/Loader';
import { showErrors } from '../../functions/helpers';
import { Link } from 'react-router-dom';

function AllInvitations() {
  const {data , isLoading} = useGetInvitationsQuery({});
  const invitations = data?.data || [];
  const [deleteInvitations ] = useDeleteInvitationsMutation({});
  if(isLoading){
    return <Loader></Loader>
  }
  const mutations:any = {
    delete: async (ids:any)=>{
      console.log('...')
      try{
        const data = {ids} ;
        await deleteInvitations(data).unwrap();
      }
      catch(err){
        showErrors(err);
      }
    }
  }
  const actions:any[] = [
    {
      title:'print',
      render:(record:any)=>{
        return  <>
        <Link to={`/print-badge/${record?.id}`}>
          <li className="list-inline-item">
            <a data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-primary" aria-label="Edit" data-bs-original-title="Edit">
              <i className="fas fa-print" style={{color:'#000000'}} ></i>
            </a>
          </li>
        </Link>
        </>
      }
    },
    {
      title:'print',
      render:(record:any)=>{
        return  <>
        <Link to={`/print-badge/${record?.id}`}>
          <li className="list-inline-item">
            <a data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-primary" aria-label="Edit" data-bs-original-title="Edit">
              <i className="fas fa-print" style={{color:'green'}} ></i>
            </a>
          </li>
        </Link>
        </>
      }
    
    }
  ]
  return (
    <>
        <CrudTable
            columns={allInvitationColumn}
            dataSource={invitations}
            mutations={mutations}
            actions={actions}
        />
    </>
  )
}

export default AllInvitations