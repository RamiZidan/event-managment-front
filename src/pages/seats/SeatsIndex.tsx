import React, { useEffect, useState } from 'react'
import CrudTable from '../../components/CrudTable'
import { seatColumns } from '../../constants/columns';
import { useGetSeatsQuery } from '../../features/seats/seatsApiSlice';
import {  useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import HistoryModal from './HistoryModal';
import AssignModal from './AssignModal';

function SeatsIndex() {
  const [searchParams , setSearchParams ]= useSearchParams();
  const status = searchParams.get('status');
  const [record , setRecord ] = useState();
  const {data , isLoading } = useGetSeatsQuery({status});
  const seats = data?.data ; 
  const [assignOpen , setAssignOpen ] = useState<number|boolean>(0) ;
  const [editSeatOpen , setEditSeatOpen ] = useState<number|boolean>(0) ;
  // useEffect(()=>{

  // },[record])

  if(isLoading){
    return <Loader></Loader>
  }

  const actions = [
    {
      title:'Assign',
      render:(_:any)=>{

        return <>
          <li className="list-inline-item" onClick={()=>{ 
              // console.log(record);
              setEditSeatOpen(true);
            }}>
            <a data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-info" aria-label="Delete" data-bs-original-title="Delete"><i className="fas fa-edit"></i> </a>                                                                
          </li>
     
        </>
      },
    },
    {
      title:'history',
      setOpen:setAssignOpen,
      render:(_:any)=>{
        return <>
          <>
          <li className="list-inline-item" onClick={()=>{ 

            setAssignOpen(true)
            }}>
            <a data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-info" aria-label="Delete" data-bs-original-title="Delete"><i className="fas fa-paperclip"></i> </a>                                                                
          </li>
    

          {
            // record?.id ?
            // :<></>
          }
          </>
        </>
      }
    }
  ]
  
  return (
    <>
      <HistoryModal open={assignOpen} setOpen={setAssignOpen} id={record?.id}/>
      <AssignModal open={editSeatOpen} setOpen={setEditSeatOpen} id={record?.id}/> 
      <CrudTable
          dataSource={seats}
          columns={seatColumns}
          actions={actions}
          defaultActions={['delete']}
          record={record}
          setRecord={setRecord}
      />
    </>
    
  )
}

export default SeatsIndex;