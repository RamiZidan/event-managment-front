import React, { useState } from 'react'
import CrudTable from '../../components/CrudTable'
import { privateInvitationColumns } from '../../constants/columns'
import Loader from '../../components/Loader';
import { useDeleteInvitationsMutation, useGetInvitationsQuery } from '../../features/invitations/invitationsApiSlice';
import PrivateInvitationModal from './PrivateInvitationModal';
import { exportToExcel, showErrors } from '../../functions/helpers';
import { Link } from 'react-router-dom';

function PrivateInvitations() {
  const {data , isLoading} = useGetInvitationsQuery({type:'private'});
  const invitations = data?.data || [];
  const [open ,setOpen] = useState<number|boolean>(0);
  const [deleteInvitations ] = useDeleteInvitationsMutation({});
  if(isLoading){
    return <Loader></Loader>
  }
  let mutations:any = {
    delete: async (ids:any)=>{
      console.log('...')
      try{
        const  data = {ids} ;
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
        <PrivateInvitationModal open={open} setOpen={setOpen} ></PrivateInvitationModal>
        <div >
          <button
           onClick={()=>{
            setOpen(1);
           }}
           type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal">اضافة جديد</button>
          <button type="button" className="btn btn-success btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>exportToExcel(privateInvitationColumns,invitations)} >
                                                      تصدير
          </button>
          <CrudTable
              columns={privateInvitationColumns}
              dataSource={invitations}
              mutations={mutations}
              actions={actions}
          />
        </div>
    </>
  )
}

export default PrivateInvitations