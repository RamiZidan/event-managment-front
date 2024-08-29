import React, { useState } from 'react'
import CrudTable from '../../components/CrudTable'
import { employeeColumns } from '../../constants/columns'
import { useDeleteUsersMutation, useGetUsersQuery } from '../../features/users/usersApiSlice'
import Loader from '../../components/Loader';
import { showErrors } from '../../functions/helpers';
import EmployeeModal from './EmployeeModal';
import PermissionsModal from './PermissionsModal';

function EmployeesIndex() {
  const {data , isLoading } = useGetUsersQuery({});
  const [deleteUsers] = useDeleteUsersMutation();
  const [permissionOpen , setPermissionOpen ] = useState<boolean|number>(0);
  const [open , setOpen ] = useState<boolean|number>();
  const users = data?.data || [] ; 
  if(isLoading){
    return <Loader></Loader>
  }
  const mutations = {
    delete: async (ids:any)=>{
      console.log('...')
      try{
        const data = {ids} ;
        await deleteUsers(data).unwrap();
      }
      catch(err){
        showErrors(err);
      }
    }
  }
  const actions = [
    {
      title:'Edit Permissions',
      render:(record:any)=>{
        return <>
          <PermissionsModal open={permissionOpen} setOpen={setPermissionOpen} id={record?.id} />
          <i
           onClick={()=>{
            setPermissionOpen(1);
           }}
           className="far fa-user"
           data-bs-toggle="modal" data-bs-target="#myModal"> </i>
        </>

      }
    }
  ]
  return (
    <>
        <EmployeeModal open={open} setOpen={setOpen} />
        
        <button
           onClick={()=>{
            setOpen(1);
           }}
           type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal">اضافة جديد</button>
        <CrudTable
            columns={employeeColumns}
            dataSource={users}
            mutations={mutations}
            actions={actions}
            defaultActions={['update','delete']}
        ></CrudTable>
    </>
  )
}

export default EmployeesIndex