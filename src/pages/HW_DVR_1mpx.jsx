import React from 'react';
import { Link } from 'react-router-dom';

function HW_DVR_1mpx(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/1mpx - G series/1"} className='button_div2'>

                            <h5>G/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/1mpx - G series/2"} className='button_div2'>

                            <h5>GA/</h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HW_DVR_1mpx;