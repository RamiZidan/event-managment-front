import React, { useEffect, useRef } from 'react'
import { useGetInvitationByIdQuery } from '../../features/invitations/invitationsApiSlice'
import { useParams } from 'react-router-dom'
import { QRCode } from 'antd';

function PrintInvitation() {
  const {id } = useParams();
  const {data , isLoading } = useGetInvitationByIdQuery(id)
  const invitation = data?.data ; 
  const ref = useRef();

  
  useEffect(()=>{
    // ref.print();
    // console.log(ref?.current);
    // PrintElem();
    if(!isLoading)
    window.print();
  },[isLoading])
  return (
    <>
    
    <div  id="print" style={{width:300, position: 'relative' ,textAlign:'center' }} ref={ref}  >
        <img   style={{width:'100%'}} src="/src/assets/images/main-badge.jpg"/>
        <div style={{  
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
        }} >
            <div> {invitation?.formal_title } - {invitation?.surname?.title }</div>
            <div> {invitation?.full_name  } </div>
            <div style={{display:'flex' , justifyContent:'center'}}>
              <div style={{ justifyContent:'center' }}> <QRCode size={80} value={invitation?.qr_code } ></QRCode> </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default PrintInvitation