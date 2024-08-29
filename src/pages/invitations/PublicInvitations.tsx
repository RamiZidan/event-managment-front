import React, { useState } from 'react'
import CrudTable from '../../components/CrudTable'
import {  publicInvitationColumns } from '../../constants/columns'
import { useDeleteInvitationsMutation, useGetInvitationsQuery } from '../../features/invitations/invitationsApiSlice'

import Loader from '../../components/Loader';
import PublicInvitationModal from './PublicInvitationModal';
import { exportToExcel, showErrors } from '../../functions/helpers';
import { Link } from 'react-router-dom';

function PublicInvitations() {
  const {data , isLoading} = useGetInvitationsQuery({type:'public'});
  const [open , setOpen ] = useState<number|boolean>();
  const [deleteInvitations ] = useDeleteInvitationsMutation({});
  const invitations = data?.data || [] ;
  if(isLoading){
    return <Loader></Loader>
  }

  const  mutations = {
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
  };
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
        <PublicInvitationModal open={open} setOpen={setOpen} />
        <div>
          <button
           onClick={()=>{
            setOpen(1);
           }}
           type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal">اضافة جديد</button>
          <button type="button" className="btn btn-success btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>exportToExcel(publicInvitationColumns,invitations)} >
             تصدير
          </button>
        <CrudTable
            columns={publicInvitationColumns}
            dataSource={invitations}
            mutations={mutations}
            actions={actions}
            defaultActions={['view' , 'update']}

        />
        </div>

    </>
  )
}

export default PublicInvitations