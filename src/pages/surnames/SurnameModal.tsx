import { Form, Modal, Switch } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import { useCreateSurnameMutation, useGetSurnamesQuery } from '../../features/surnames/surnamesApiSlice';
import { useCreateGroupMutation, useGetGroupsQuery } from '../../features/groups/groupsApiSlice';
import { useCreatePrivateInvitationMutation } from '../../features/invitations/invitationsApiSlice';
import { showErrors } from '../../functions/helpers';

function SurnameModal({open , setOpen }) {


  const [createSurname ] = useCreateSurnameMutation();


  const sendGroup = async (values:any)=>{
    try{
        const data = { ...values , lang: values.lang ? 'english':'arabic' };
        await createSurname(data).unwrap();
    }
    catch(err){
        showErrors(err);
    }
  }
  

  return <>
    <Modal open={open} footer={<></>} closable >
        <Form onFinish={sendGroup} >
            <div   aria-labelledby="myModalLabel" aria-hidden="true" data-bs-scroll="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="myModalLabel"> اضافة  جديد</h5>
                                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">                                                            
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-firstname-input"> اللقب </label>
                                                        <Form.Item  name="title" rules={[{required:true , message:'This field is required'}]} >
                                                            <input type="text" className="form-control" />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="formrow-password-input"> اللغة  </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {/* <input type="checkbox" id="switch2"  /> */}
                                                        {/* <label htmlFor="switch2" data-on-label="عربي" data-off-label="انكليزي"></label> */}
                                                        <Form.Item name="lang" >
                                                            <Switch
                                                            />    
                                                        </Form.Item>
                                                        
                                                </div>      
                                            </div>
                                            
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary waves-effect" data-bs-dismiss="modal"
                                                onClick={()=>{setOpen(false)}}
                                            >اغلاق</button>
                                            <button type="submit" className="btn btn-primary waves-effect waves-light">اضافة </button>
                                        </div>
                                    </div>
                                </div>
            </div>
        </Form>
    </Modal>
    </>
  
}

export default SurnameModal