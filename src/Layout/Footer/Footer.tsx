import { Layout } from 'antd';
import { useRef } from 'react';
import './style.scss'
const Footer = () => {
  const date = new Date().getFullYear();
  const ref = useRef();
  return (
    // <Layout.Footer style={{  display:'block' , zIndex:100}} id="footer">
        <div  className="container-fluid footer" >
          <div className="row">
            <div className="col-sm-6">
                <script>{date }</script> © hstp-events.
            </div>
            <div className="col-sm-6" style={{ display:'flex' , justifyContent:'end' }}>
                <div className="text-sm-end d-none d-sm-block">
                    Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="#" target="_blank" className="text-reset">RS4IT</a>
                </div>
            </div>
          </div>
        </div>
          
    // </Layout.Footer>
  )
}

export default Footer