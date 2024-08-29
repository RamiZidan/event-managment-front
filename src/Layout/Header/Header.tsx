import { Layout, theme} from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
// import { selectCurrentEmail, selectCurrentPermission } from '../../features/auth/authSlice';
// import { selectCurrentUserName } from '../../features/auth/authSlice';
// import { Permissions } from '../../features/auth/authSlice';
import { logOut } from '../../features/auth/authSlice';
import { Link , useLocation, useNavigate } from 'react-router-dom';
import './style.scss'
import { useState } from 'react';
import { getUser } from '../../functions/helpers';
const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    // const title: string =  'Admin Panel' ;
    const [showLogout, setShowLogout] = useState('none') ;
    const location = useLocation();
    location; 
    const user = getUser();
    
    // const location  = useLocation() ;
    console.log(location)
    const routeMap = {
        '/' : 'كراسي',
        'surnames':'الألقاب',
        'gorups':'الفئات'
    };
    let pageTitle = '';
    let routes = ['surnames' , 'groups' , 'send-invitations','public-invitations','profile','employees','all-invitations','seats','report'];
    let routes2 =['الألقاب','الفئات','إرسال الدعوات','الدعوات العامة','تعديل المعلومات الشخصية','الموظفين','جميع الدعوات','الكراسي','تقارير الكراسي']
    for(let i =0 ; i < routes.length;i++){
        if(location?.pathname?.includes(routes[i])){
            pageTitle= routes2[i] ;
        }
    }
    const dropDowns = {
        "control-panel":[
            {title:'إرسال الدعوات' , link:'/send-invitations'},
            {title:'الدعوات العامة' , link:'/public-invitations'},
            {title:'الألقاب' , link:'/surnames'},
            {title:'الفئات' , link:'/groups'},
            {title:'تعديل معلومات الدخول' , link:'/profile'},
            {title:'إضافة موظفين' , link:'/employees'},
        ],
        "festival-day":[
            {title:'جميع الدعوات' , link:'/all-invitations'},
            {title:'الكراسي' , link:'/seats?status=all'},
            {title:'الكراسي الفارغة فقط' , link:'/seats?status=empty'},
            {title:'تقارير الكراسي' , link:'/seats/report'},
        ],
        "qr-code":[
            {title:'QR code' , link:'/qr-code'},
        ]
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const handleLogout = () => {
        // dispatch(logOut())
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        navigate('/login')
    }
    const toggleLogoutDropDown = ()=>{
        if(showLogout == 'none'){
            setShowLogout('block');
        }
        else{
            setShowLogout('none');
        }
    }
    return (
        <Layout.Header style={{
            padding: 0,
            marginBottom:60,
            background: colorBgContainer
        }} >
            {/* <div className='header-componenet'> */}
            <div className="ishorizontal-topbar" style={{display:'contents'}}>
                <div className="navbar-header">
                    <div className="d-flex">
                        
                        <div className="navbar-brand-box" style={{display:'contents'}}>
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src='src/assets/images/logo.png' alt="l" height="26"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="src/assets/images/logo.png" alt="" height="70"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="src/assets/images/logo.png" alt="" height="26"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="src/assets/images/logo.png" alt="" height="70"/>
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 d-lg-none header-item" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <i className="bx bx-menu align-middle"></i>
                        </button>

                        <div className="page-title-box align-self-center d-none d-md-block">
                            <h4 className="page-title mb-0">  {pageTitle }</h4>
                        </div>


                    </div>

                    <div className="d-flex">

                
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="src/assets/images/users/avatar-3.jpg"
                                alt="Header Avatar"
                                    onClick={toggleLogoutDropDown}
                                />
                                <span className="d-none d-xl-inline-block ms-2 fw-medium font-size-15"
                                    onClick={toggleLogoutDropDown}
                                >{user?.username } </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end pt-0" style={{display:showLogout}}>
                                <div className="p-3 border-bottom">
                                    <h6 className="mb-0">{user?.username}</h6>
                                    <p className="mb-0 font-size-11 text-muted">{user?.email}</p>
                                </div>
                            
                                <div className="dropdown-divider"></div>
                                <a
                                 onClick={handleLogout}
                                 className="dropdown-item" href="auth-logout.html"><i className="mdi mdi-logout text-muted font-size-16 align-middle me-2"></i> <span className="align-middle">تسجيل الخروج</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="topnav" >
                    <div className="container-fluid">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                            <div className="collapse navbar-collapse" id="topnav-menu-content" style={{display:'block'}} >
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                            style={{ marginBottom:'0px' , paddingBottom:'0px'}}
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-home-alt icon nav-icon" style={{ marginBottom:'0px' }}></i>
                                            <span style={{ marginBottom:'0px' }} data-key="t-dashboards">لوحة التحكم</span> <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-dashboard" 
                                            style={{ marginTop:'0px' , paddingTop:'0px' }}
                                        >
                                            {
                                                dropDowns['control-panel']?.map((item:any)=>{
                                                    return <>
                                                        <Link className="dropdown-item" style={{ fontSize:'0.8rem', height:'2.6rem' , marginTop:'0px'}} data-key="t-ecommerce" to={item.link} >{ item.title}  </Link>
                                                    </>;
                                                })
                                            }
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                            style={{ marginBottom:'0px' , paddingBottom:'0px'}}
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-home-alt icon nav-icon" style={{ marginBottom:'0px' }}></i>
                                            <span style={{ marginBottom:'0px' }} data-key="t-dashboards">يوم الحفل</span> <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-dashboard" 
                                            style={{ marginTop:'0px' , paddingTop:'0px' }}
                                        >
                                            {
                                                dropDowns['festival-day']?.map((item:any)=>{
                                                    return <>
                                                        <Link style={{ fontSize:'0.8rem', height:'2.6rem' , marginTop:'0px'}} className="dropdown-item" data-key="t-ecommerce" to={item.link} >{ item.title}  </Link>
                                                    </>;
                                                })
                                            }
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                            style={{ marginBottom:'0px' , paddingBottom:'0px'}}
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-home-alt icon nav-icon" style={{ marginBottom:'0px' }}></i>
                                            <span style={{ marginBottom:'0px' }} data-key="t-dashboards">QR code</span> <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-dashboard" 
                                            style={{ marginTop:'0px' , paddingTop:'0px' }}
                                        >
                                            {
                                                dropDowns['qr-code']?.map((item:any)=>{
                                                    return <>
                                                        <Link style={{ fontSize:'0.8rem', height:'2.6rem' , marginTop:'0px'}} className="dropdown-item" data-key="t-ecommerce" to={item.link} >{ item.title}  </Link>
                                                    </>;
                                                })
                                            }
                                        </div>
                                    
                                    </li>

                                

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

                
            {/* </div> */}
        </Layout.Header>
        
    )
}

export default Header