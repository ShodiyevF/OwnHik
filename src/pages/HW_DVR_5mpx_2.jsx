import React from 'react';
import { Link } from 'react-router-dom';

function HW_DVR_5mpx_2(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/5mpx - U series/2/1"} className='button_div2'>

                            <h5>3.5.371/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/5mpx - U series/2/2"} className='button_div2'>

                            <h5>4.21.100/</h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HW_DVR_5mpx_2;