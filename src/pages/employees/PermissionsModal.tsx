import { Form, Modal, Switch } from 'antd'
import React from 'react'
import { useUpdatePermissionsMutation } from '../../features/users/usersApiSlice'
import { showErrors } from '../../functions/helpers';

function PermissionsModal({open , setOpen , id}) {
  const [updatePermissions] = useUpdatePermissionsMutation();

  const handleSubmit = async (values:any)=>{
        console.log(values);
        try{
           const permissions = Object.keys(values)?.filter((id)=>{
                if(values[id]){
                    return true  ;
                }
                return false ;
           })
           await updatePermissions({id,permissions}).unwrap();
        }
        catch(err){
            showErrors(err);
        }
  }
  return (
    <>
        <Modal open={open} footer={<></>}>
        <div  aria-labelledby="myModalLabel" aria-hidden="true" data-bs-scroll="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="myModalLabel"> الصلاحيات</h5>
                                    </div>
                                    <div className="modal-body">
                                      
                                       <Form
                                            onFinish={handleSubmit}
                                        >    
                                            <div className="row">                                                            
                                                
                                                <div className="col-md-12">
                                                
                                                    <div className="d-flex flex-wrap gap-2">
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input"> ارسال دعوات   </label>
                                                        <Form.Item 
                                                            name="1"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">  الدعوات العامة   </label>
                                                        <Form.Item 
                                                            name="2"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">  الدعوات المقبولة يوم الحفل</label>
                                                        <Form.Item 
                                                            name="3"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input"> QR Code   </label>
                                                        <Form.Item 
                                                            name="4"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">   تعيين الكراسي   </label>
                                                        <Form.Item 
                                                            name="5"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">    الاطلاع على الداشبورد   </label>
                                                        <Form.Item 
                                                            name="6"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">    إدارة الموظفين   </label>
                                                        <Form.Item 
                                                            name="7"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                        <label className="htmlForm-label" htmlFor="htmlFormrow-password-input">    الاطلاع على سجل التغييرات   </label>
                                                        <Form.Item 
                                                            name="8"
                                                        >
                                                            <Switch/>
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="modal-footer">
                                            <button type="button" 
                                                onClick={()=>{setOpen(0)}}
                                            className="btn btn-secondary waves-effect" data-bs-dismiss="modal">اغلاق</button>
                                            <button type="submit" className="btn btn-primary waves-effect waves-light">تعديل  </button>
                                        </div>
                                    </Form>
                                    </div>
                                </div>
                            </div>
                        </div>

        </Modal>
    </>
  )
}

export default PermissionsModal