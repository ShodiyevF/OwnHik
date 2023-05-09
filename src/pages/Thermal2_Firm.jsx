import React from 'react'
import { Link } from 'react-router-dom'

export default function Thermal2_Firm() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/Thermal/Firmware/1"} className='button_div2'>
                     
                    <h5>00 Temperature Screening Cameras/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Thermal/Firmware/2"} className='button_div2'>
                     
                    <h5>01 Security Thermal Cameras (DS-2T)/ </h5>
                </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/10.%20Thermal/1.%20Firmware/%21%21%21%20Kak%20vybrat%20proshivky%21%21%21.xlsx"} className='button_div2'>
                     
                    <h5>!!! Kak vybrat proshivky!!!.xlsx</h5>
                </a>
            </div>
             
        </div>
    </div>
</div>
  )
}
