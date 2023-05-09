import React from 'react'
import { Link } from 'react-router-dom'

export default function Keyboards_1_3() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/3/1"} className='button_div2'>

                    <h5>KeyboardDemo/    </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/3/2"} className='button_div2'>

                    <h5>doc/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/3/3"} className='button_div2'>

                    <h5>inEn/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/3/4"} className='button_div2'>

                    <h5>lib/  </h5>
                </Link>
            </div>

        </div>
    </div>
</div>
  )
}
