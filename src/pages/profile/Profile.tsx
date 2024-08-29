import { Form, message } from 'antd'
import React from 'react'
import { useUpdateProfileMutation } from '../../features/auth/authApiSlice'
import { showErrors } from '../../functions/helpers';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [updateProfile ] = useUpdateProfileMutation();
  const navigate = useNavigate();
  const submitForm = async (values:any)=>{
    try{
        const data = {...values};
        await updateProfile(data).unwrap();
        message.success('You re profile was updated soon you will be redirected to login again to your account')
        setTimeout(()=>{
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
            window.location.reload();
        }, 1000)
    }
    catch(err){
        showErrors(err);
    }
  }

  return (
    <>
    <Form onFinish={submitForm}>
            <div className="row"> 
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center mb-3">
                                                
                                               <h3>تعديل ملفك الشخصي
                                            </h3>
                                              
                                                <div className="ms-auto">
                                                    <div className="dropdown">
                                                        
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">الاسم *
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="name" rules={[{required:true , message: 'this field is requried'}]} >
                                                      <input type="text" className="form-control" />
                                                    </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label"> اسم المستخدم (اختياري)
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="username"  >
                                                      <input type="text" className="form-control" />
                                                    </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">عنوان البريد الإلكتروني *
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="email" rules={[{required:true , message: 'this field is requried'}]} >
                                                        <input type="email" className="form-control" placeholder="" id="horizontal-email-input"/>
                                                    </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">تأكيد البريد الإلكتروني *
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="email_confirmation" rules={[{required:true , message: 'this field is requried'}]} >
                                                        <input type="email" className="form-control" placeholder="" id="horizontal-email-input"/>
                                                    </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">كلمة المرور (اختياري)
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="password" rules={[{required:true , message: 'this field is requried'}]} >
                                                      <input type="password" className="form-control" placeholder="******" id="horizontal-password-input"/>
                                                    </Form.Item>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">تأكيد كلمة المرور (اختياري)
                                                    </label>
                                                    <div className="col-sm-9">
                                                    <Form.Item name="password_confirmation" dependencies={['password']} rules={[{required:true , message: 'this field is requried'},
                                                          ({ getFieldValue }) => ({
                                                           validator(_, value) {
                                                             if (!value || getFieldValue('password') === value) {
                                                               return Promise.resolve();
                                                             }
                                                             return Promise.reject(new Error('The new password that you entered do not match!'));
                                                           },
                                                         })
                                                    ]} >
                                                      <input type="password" className="form-control" placeholder="******" id="horizontal-password-input"/>
                                                    </Form.Item>
                                                    </div>
                                                </div>
    
                                                <div className="row justify-content-end">
                                                    <div className="col-sm-9">
                                                       
    
                                                        <div>
                                                            <button type="submit" className="btn btn-primary w-md">تعديل</button>
                                                        </div>
                                                    </div>
                                                </div>
                               

                                        </div>
                                       
                                    </div>
                                </div>

                          
                        </div>
            </Form>
        
    </>
  )
}

export default Profile