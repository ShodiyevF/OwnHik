import React from 'react'
import { Link } from 'react-router-dom'

export default function Thermal2_Soft() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/Thermal/Soft/1"} className='button_div2'>
                     
                    <h5>ThermalCameraConfigTool V 2.3.12/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
