import { Button, Modal, Table } from 'antd'
import React, { useEffect } from 'react'
import { useGetSeatHistoryQuery } from '../../features/seats/seatsApiSlice'
import CrudTable from '../../components/CrudTable';
import { seatHistoryColumns } from '../../constants/columns';
import { CloseCircleFilled } from '@ant-design/icons';
import Loader from '../../components/Loader';

function HistoryModal({open ,setOpen ,id }) {
  const {data , isLoading  }= useGetSeatHistoryQuery(id);
  const history = data?.data ;
  // console.log(history)
  useEffect(()=>{
    // console.log('id',id);
  },[id])
  if(isLoading)
    return <Loader></Loader>
  return (
    <>
        <Modal open={open}  footer={()=>{
            return <>
                <Button
                    onClick={()=>setOpen(false)}
                >
                إغلاق
                </Button>
            </>
        }} >
            {
                history?.length ?
                <CrudTable
                    columns={seatHistoryColumns}
                    dataSource={history}
                />:
                <div style={{ margin:'2rem' }}>
                    <h2 style={{ textAlign:'center' }} > No history </h2>
                </div>
            }
            

        </Modal>
    
    </>
  )
}

export default HistoryModal