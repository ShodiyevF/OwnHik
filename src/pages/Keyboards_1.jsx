import React from 'react'
import { Link } from 'react-router-dom'

export default function Keyboards_1() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/1"} className='button_div2'>

                            <h5>1.Firmware/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/2"} className='button_div2'>

                            <h5>2.User Manual/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/3"} className='button_div2'>

                            <h5>3.SDK/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/4"} className='button_div2'>

                            <h5>4.Driver/     </h5>
                        </Link>
                        <a href={'http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/08.%20Keyboards/DS-1005KI/3.SDK.rar'} className='button_div2'>

                            <h5>3.SDK.rar</h5>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
