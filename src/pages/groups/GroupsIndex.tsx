import React, { useState } from 'react'
import CrudTable from '../../components/CrudTable'
import { ColorPicker } from 'antd'
import { useDeleteGroupsMutation, useGetGroupsQuery } from '../../features/groups/groupsApiSlice'
import Loader from '../../components/Loader';
import { showErrors } from '../../functions/helpers';
import GroupModal from './GroupModal';

function GroupsIndex() {
  const {data , isLoading } = useGetGroupsQuery({});
  const groups = data?.data || [] ;
  const [deleteGroup]  =useDeleteGroupsMutation();
  const [open , setOpen ] = useState<number|boolean>(false);
  const groupColumns : any[] = [
    {
      title:'اللون',
      render:(record:any)=>{
        return <ColorPicker disabled="true" value={record.color}></ColorPicker>
      }
    },
    {
      title:'الفئة',
      key:'title'
    }
  ]

  if(isLoading){
    return <Loader></Loader>
  }
  const mutations = {
    delete: async (ids:any)=>{
      console.log('...')
      try{
        const data = {ids} ;
        await deleteGroup(data).unwrap();
      }
      catch(err){
        showErrors(err);
      }
    }
  }
  return (
    <>
        <button
           onClick={()=>{
            setOpen(1);
           }}
           type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-2"  data-bs-toggle="modal" data-bs-target="#myModal">اضافة جديد</button>
        <GroupModal open={open} setOpen={setOpen} />
        <CrudTable
            columns={groupColumns}
            dataSource={groups}
            mutations={mutations}
            defaultActions={['delete','update']}
        />
    </>
  )
}

export default GroupsIndex