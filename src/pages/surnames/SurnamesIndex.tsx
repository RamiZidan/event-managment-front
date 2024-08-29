import React, { useState } from 'react'
import CrudTable from '../../components/CrudTable'
import { surnameColumns } from '../../constants/columns'
import { useDeleteSurnamesMutation, useGetSurnamesQuery } from '../../features/surnames/surnamesApiSlice'
import { showErrors } from '../../functions/helpers';
import SurnameModal from './SurnameModal';

function SurnamesIndex() {
  const {data } = useGetSurnamesQuery({});
  const surnames = data?.data || [] ; 
  const [deleteSurnames] = useDeleteSurnamesMutation();
  const [open , setOpen] = useState<boolean|number>() ;

  const mutations = {
    delete: async (ids:any)=>{
      // console.log('...')
      try{
        const data = {ids} ;
        await deleteSurnames(data).unwrap();
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
        <SurnameModal open={open} setOpen={setOpen} />  
        <CrudTable
            columns={surnameColumns}
            dataSource={surnames}
            mutations={mutations}
            defaultActions={['delete','update']}
        />
    </>
  )
}

export default SurnamesIndex