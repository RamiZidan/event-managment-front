import { Button, Form, Modal, Select } from 'antd'
import React, { useEffect } from 'react'
import { useAssignSeatMutation, useGetSeatByIdQuery } from '../../features/seats/seatsApiSlice'
import Loader from '../../components/Loader';
import { useGetInvitationsQuery } from '../../features/invitations/invitationsApiSlice';
import { showErrors } from '../../functions/helpers';

function AssignModal({open , setOpen , id }) {
  let {data:seat ,isLoading} = useGetSeatByIdQuery(id);
  let {data:invitaitons } =useGetInvitationsQuery({});
  const [assignSeat ] = useAssignSeatMutation();
  invitaitons= invitaitons?.data ; 
  seat = seat?.data ;
  const handleSubmit = async (values:any)=>{
    try{
        console.log(values);
        values.id = id ;
        await assignSeat(values).unwrap();
    }
    catch(err){
        showErrors(err);
    }
  }
  useEffect(()=>{

  },[id])

  if(isLoading)
    return <Loader></Loader>
  return (
    <>
        <Modal
            open={open}
            footer={<></>}
        >   
        <Form onFinish={handleSubmit}>
                <div
                    >
                {/* <Select>
                    <option value={}> </option>
                </Select> */}
                </div>
                <div>
                    رمز الكرسي: {seat?.code }
                </div>
                <div>
                    فئة الكرسي: {seat?.type}
                </div>
                <div className="col-md-6">
                    <label >المدعو </label>
                    <Form.Item name="invitation_id">
                        <select className="form-select" id="autoSizingSelect">
                            <option >اختر المدعو </option>
                            {
                                invitaitons?.map((inv:any)=>{
                                    return <>
                                        <option value={inv?.id}> {inv?.full_name } </option>
                                    </>
                                })
                            }
                        </select>
                    </Form.Item>
                    
                </div>
                <button className='btn btn-primary waves-effect' type='submit' >
                        حفظ
                </button>
                <button className='btn btn-secondary waves-effect' onClick={()=>{setOpen(0)}} >
                        إغلاق
                </button>
        </Form>

        </Modal>
    </>
  )
}

export default AssignModal