import React from 'react'
import { Link } from 'react-router-dom'

export default function Keyboards_5_1() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/1"} className='button_div2'>
                     
                    <h5>V2.1.0/     </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/2"} className='button_div2'>
                     
                    <h5>V2.2.0/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/3"} className='button_div2'>
                     
                    <h5>V2.3.0(support hikcentral for old 1600）/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/4"} className='button_div2'>
                     
                    <h5>V2.V3.1.0(2.XX verson can't upgrade this verson）/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/5"} className='button_div2'>
                     
                    <h5>V3.2.0/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/6"} className='button_div2'>
                     
                    <h5>V3.4.0 build 200904 修复HCP模式，密码输错崩溃问题/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1600KI/1/7"} className='button_div2'>
                     
                    <h5>V3.6.0 build211228/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
