import { ColorPicker, Form, Modal, Switch } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import { useGetSurnamesQuery } from '../../features/surnames/surnamesApiSlice';
import { useCreateGroupMutation, useGetGroupsQuery } from '../../features/groups/groupsApiSlice';
import { useCreatePrivateInvitationMutation } from '../../features/invitations/invitationsApiSlice';
import { showErrors } from '../../functions/helpers';
import { useCreateUserMutation } from '../../features/users/usersApiSlice';

function EmployeeModal({open , setOpen }) {


  const [createUser ] = useCreateUserMutation();


  const sendGroup = async (values:any)=>{
    try{
        let data = {...values} ;
        await createUser(data).unwrap();
        setOpen(false);
    }
    catch(err){
        showErrors(err);
    }
  }
  

  return <>
    <Modal open={open} footer={<></>} >
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
                                                        <label className="form-label" htmlFor="formrow-firstname-input"> اسم الموظف </label>
                                                        <Form.Item  name="name" rules={[{required:true , message:'This field is required'}]} >
                                                            <input type="text" className="form-control" />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="formrow-password-input"> اسم المستخدم  </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {/* <input type="checkbox" id="switch2"  /> */}
                                                        {/* <label htmlFor="switch2" data-on-label="عربي" data-off-label="انكليزي"></label> */}
                                                        <Form.Item name="username" rules={[{required:true , message:'This field is required'}]} >
                                                        <input type="text" className="form-control" />

                                                        </Form.Item>
                                                        
                                                </div>   
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="formrow-password-input"> البريد الإلكتروني  </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {/* <input type="checkbox" id="switch2"  /> */}
                                                        {/* <label htmlFor="switch2" data-on-label="عربي" data-off-label="انكليزي"></label> */}
                                                        <Form.Item name="email" rules={[{required:true , message:'This field is required'}, {type: 'email',message: 'The input is not valid E-mail!',},]} >
                                                            <input type="email" className="form-control" />
                                                        </Form.Item>
                                                        
                                                </div>   
                                                
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="formrow-password-input"> كلمة السر  </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {/* <input type="checkbox" id="switch2"  /> */}
                                                        {/* <label htmlFor="switch2" data-on-label="عربي" data-off-label="انكليزي"></label> */}
                                                        <Form.Item name="password" rules={[{required:true , message:'This field is required'}]} >
                                                        <input type="text" className="form-control" />

                                                        </Form.Item>
                                                        
                                                </div>   
                                                
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="formrow-password-input"> تأكيد كلمة السر  </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {/* <input type="checkbox" id="switch2"  /> */}
                                                        {/* <label htmlFor="switch2" data-on-label="عربي" data-off-label="انكليزي"></label> */}
                                                        <Form.Item 
                                                                   dependencies={['password']}
                                                                   hasFeedback
                                                                   name="password_confirmatoin" 
                                                                   rules={[{required:true , message:'This field is required'},
                                                                   ({ getFieldValue }) => ({
                                                                    validator(_, value) {
                                                                      if (!value || getFieldValue('password') === value) {
                                                                        return Promise.resolve();
                                                                      }
                                                                      return Promise.reject(new Error('The new password that you entered do not match!'));
                                                                    },
                                                                  }),
                                                                   
                                                                   ]}  >
                                                            <input type="text" className="form-control" />

                                                        </Form.Item>
                                                        
                                                </div>   
                                                
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

export default EmployeeModal