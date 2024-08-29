import { Form, Modal, Switch } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import { useGetSurnamesQuery } from '../../features/surnames/surnamesApiSlice';
import { useGetGroupsQuery } from '../../features/groups/groupsApiSlice';
import { useCreatePrivateInvitationMutation } from '../../features/invitations/invitationsApiSlice';
import { showErrors } from '../../functions/helpers';

function PrivateInvitationModal({open , setOpen }) {
  const form = useForm() ;
  let {data:surnames } = useGetSurnamesQuery({}) ;
  let {data:groups } = useGetGroupsQuery({});
  const [createPrivateInvitation ] = useCreatePrivateInvitationMutation();
  groups = groups?.data?.map((group)=>{
    return {label: group.title , value : group.id} 

  })
  surnames = surnames?.data?.map((surname)=>{
    return {label: surname.title , value : surname.id} 
    
  });

  const sendInvitatoin =async (values:any)=>{
    console.log(values);
    values.invitation_lang = (values.invitation_lang ? 1 :0 );
    values.send_email = (values.send_email ? 1 : 0 ) ;
    values.send_whatsapp = (values.send_whatsapp? 1 : 0 ) ;
    values.confirmed_at = (values.confirmed_at ? new Date() : null ) ;
    console.log(values);
    try{
        await createPrivateInvitation(values).unwrap();
    }
    catch(err){
        showErrors(err);
    }
  }
  

  return <>
  <Modal open={open} footer={<></>} >
  {/* <div id="myModal" className="modal fade" tabIndex={100}  aria-labelledby="myModalLabel" aria-hidden="true" data-bs-scroll="true"> */}
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="myModalLabel"> اضافة مدعو جديد</h5>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                </div>
                                <div className="modal-body">
                                   <h3>معلومات المدعو</h3>
                                   <Form 
                                    onFinish={sendInvitatoin}
                                   >
                                    <div className="row mb-1">
                                                                                                    
                                                                                              
                                        <div className="col-md-6">
                                            <label className="" htmlFor="autoSizingSelect">اللقلب</label>
                                            <Form.Item name="formal_title"
                                                rules={[{ required: true, message: 'This field is requied' }]}
                                            >
                                                <select className="form-select" id="autoSizingSelect">
                                                    <option /* selected="" */>Choose...</option>
                                                    <option value="Mr"> Mr </option>
                                                    <option value="Your Excellency"> Your Excellency </option>
                                                    <option value="سعادة">  سعادة </option>
                                                    <option value="معالي"> معالي </option>
                                                </select>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="" htmlFor="autoSizingSelect">اللقب 2</label>
                                        <Form.Item name="surname_id"
                                            rules={[{ required: true, message: 'This field is requied' }]}
                                        >
                                            <select className="form-select" id="autoSizingSelect" >
                                                <option /* selected="" */>Choose...</option>
                                                {
                                                    surnames?.map((surname)=>{
                                                        return <option value={surname.value} > {surname.label} </option>
                                                    })
                                                }
                                            </select>
                                        </Form.Item>
                                        </div>
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="formrow-firstname-input"> الاسم الكامل</label>
                                    <Form.Item
                                        name="full_name"
                                    >
                                        <input type="text" className="form-control" name='full_name' />
                                    </Form.Item>
                                    </div>

                                    <div className="row">                                                            
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-email-input">البريد الالكتروني</label>
                                                <Form.Item name="email" rules={[{ required: true, message: 'This field is requied' }]}>
                                                    <input type="email" className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-email-input">بريد الكتروني اضافي </label>
                                                <Form.Item
                                                    name="additional_email"
                                                >
                                                    <input type="email" className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                
                                                <label className="form-label" htmlFor="formrow-password-input">الجهة</label>
                                                <Form.Item
                                                    name="party"
                                                    rules={[{ required: true, message: 'This field is requied' }]}
                                                >
                                                    <input type="text" className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-password-input">رقم الواتساب</label>
                                                <Form.Item
                                                    name="whatsapp_number"
                                                    rules={[{ required: true, message: 'This field is requied' }, {pattern :new RegExp(/^(0966|00966|966|\+966)([0-9]{9})$/) , message:'should be a saudi phone number'}]}
                                                >
                                                    <input type="text" className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-password-input"> المنصب </label>
                                                <Form.Item
                                                    name="position"
                                                    rules={[{ required: true, message: 'This field is requied' }]}
                                                >
                                                    <input type="text" className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-password-input"> الفئة </label>
                                                <Form.Item name="group_id" 
                                                    rules={[{ required: true, message: 'This field is requied' }]}
                                                >

                                                    <select className="form-select" id="autoSizingSelect">
                                                        <option /* selected="" */>Choose...</option>
                                                        {
                                                            groups?.map((group)=>{
                                                                return <option value={group.value}> {group.label} </option>
                                                            })
                                                        }
                                                    </select>
                                                </Form.Item>
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="formrow-password-input"> لغة الدعوة </label>
                                            <div className="d-flex flex-wrap gap-2">
                                                <Form.Item
                                                    name="invitation_lang"
                                                >
                                                    <Switch

                                                    >
                                                    </Switch>
                                                </Form.Item>
                                        </div>
                                    </div>
                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="formrow-password-input"> ارسال بريد </label>
                                            <div className="d-flex flex-wrap gap-2">
                                                
                                                {/* <label htmlFor="switch2" data-on-label="نعم" data-off-label="لا"></label> */}
                                                <Form.Item
                                                    name="send_email"
                                                >
                                                    <Switch

                                                    >
                                                    </Switch>
                                                </Form.Item>
                                        </div>
                                    </div>
                                        
                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="formrow-password-input"> ارسال واتساب </label>
                                            <div className="d-flex flex-wrap gap-2">
                                                
                                                <Form.Item
                                                    name="send_whatsapp"
                                                >
                                                    <Switch

                                                    >
                                                    </Switch>
                                                </Form.Item>
                                        </div>
                                    </div>

                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="formrow-password-input">  تأكيد حضور </label>
                                            <div className="d-flex flex-wrap gap-2">
                                                
                                                {/* <label htmlFor="switch4" data-on-label="نعم" data-off-label="لا"></label> */}
                                                <Form.Item
                                                    name="confirmed_at"
                                                >
                                                    <Switch

                                                    >
                                                    </Switch>
                                                </Form.Item>
                                        </div>
                                    </div>
                                        </div>
                                    <div className="modal-footer">
                                        <button onClick={()=>setOpen(0)} type="button" className="btn btn-secondary waves-effect" data-bs-dismiss="modal">اغلاق</button>
                                        <button type="submit" className="btn btn-primary waves-effect waves-light">اضافة </button>
                                    </div>
                                </Form>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
    </Modal>
    </>
  
}

export default PrivateInvitationModal