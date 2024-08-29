import { Spin } from 'antd'
import React from 'react'

function Loader() {
  return (
    <div style={{ display:'flex' , justifyContent:'center', alignItems:'center' , height:'30rem' }}>
    <Spin
      size='large'
    ></Spin>
  </div>
  )
}

export default Loader