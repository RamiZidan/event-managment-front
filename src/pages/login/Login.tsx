import React, { useState } from 'react'
import { message} from 'antd'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import {  useDispatch } from 'react-redux';
import { setCredentials, setUserData } from '../../features/auth/authSlice';

import './style.css'
import { useNavigate } from 'react-router-dom'
type LoginFieldType = {
  email?: string,
  password?: string,
}


const Login = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const [email , setEmail] = useState<string>() ; 
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();

  const onFinish:any = async () => {
    const data :LoginFieldType ={ email , password} ;
    
    try {
      let userData = await login({ ...data}).unwrap();
      userData = {...userData?.user , access_token :userData.token };
      console.log(userData);
      dispatch(setCredentials(userData))
    //   dispatch(setUserData(userData))    
    //   navigate('/', { replace: true })
      message.success('Login Successful')
      setEmail('');
      setPassword('');
      
    } catch (error: any) {
        console.log(error);
        message.error('Wrong credentials')
    }
    window.location.reload();
  }
  return (   
    <>
      
    <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-light"></div>
        <div className="container">
            <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-lg-6 col-xl-5">

                        <div className="mb-4 pb-2">
                            <a href="index.html" className="d-block auth-logo">
                                <img src="src/assets/images/logo.png" alt="" height="90" className="auth-logo-dark me-start"/>
                                <img src="src/assets/images/logo.png" alt="" height="90" className="auth-logo-light me-start"/>
                            </a>
                        </div>

                        <div className="card">
                            <div className="card-body p-4"> 
                                <div className="text-center mt-2">
                                    {/* <h5 style="font-family: tajawal;">تسجيل الدخول</h5> */}
                                   
                                </div>
                                <div className="p-2 mt-4">
                                    {/* <form > */}
        
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="username">اسم المستخدم *</label>
                                            <div className="position-relative input-custom-icon">
                                                <input type="text" className="form-control" id="username" placeholder="Enter username"
                                                    onChange={(e)=>setEmail(e?.target?.value)}
                                                />
                                                 <span className="bx bx-user"></span>
                                            </div>
                                        </div>
                
                                        <div className="mb-3">
                                           
                                            <label className="form-label" htmlFor="password-input">كلمة المرور</label>
                                            <div className="position-relative auth-pass-inputgroup input-custom-icon">
                                                <span className="bx bx-lock-alt"></span>
                                                <input type="password"
                                                    onChange={(e)=>setPassword(e.target.value)}
                                                className="form-control" id="password-input" placeholder="Enter password"/>
                                                <button
                                                   
                                                    type="button" className="btn btn-link position-absolute h-100 end-0 top-0" id="password-addon">
                                                    <i className="mdi mdi-eye-outline font-size-18 text-muted"></i>
                                                </button>
                                            </div>
                                        </div>
                
                                        <div className="form-check py-1">
                                           
                                        </div>
                                        
                                        
                                        <div className="mt-3">
                                            <button className="btn btn-primary w-100 waves-effect waves-light" 
                                                onClick={()=>onFinish()} 
                                            >تسجيل الدخول</button>
                                        </div>

                                       

                                        <div className="mt-4 text-center">
                                            <a href="" className="text-muted text-decoration-underline">هل نسيت  اسم المستخدم ؟</a>
                                            <a href="" className="text-muted text-decoration-underline">هل نسيت  اسم المستخدم ؟</a>
                                        </div>
                                    {/* </form> */}
                                </div>
            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center p-4">
                            <p>© <script>document.write(new Date().getFullYear())</script> hstp-events.com.  <i className="mdi mdi-heart text-danger"></i> </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
};

export default Login 