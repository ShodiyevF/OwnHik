import React from 'react'
import { Link } from 'react-router-dom'

export default function Keyboards_5() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1"} className='button_div2'>
                     
                    <h5>01. Firmware/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/2"} className='button_div2'>
                     
                    <h5>02. Tools/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/3"} className='button_div2'>
                     
                    <h5>03. How to/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
