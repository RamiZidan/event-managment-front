import { Input, QRCode } from 'antd'
import React, { useState } from 'react'

function QRCodePage() {
  const [value , setValue] = useState();
  return (
    <>
    
        <Input onChange={(e)=>{setValue(e.target.value)}} ></Input>
        <QRCode
            value={value}
        ></QRCode>
    </>
  )
}

export default QRCodePage