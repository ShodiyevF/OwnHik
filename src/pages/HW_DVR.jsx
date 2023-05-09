import React from 'react';
import { Link } from 'react-router-dom';

function HW_DVR(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/1mpx - G series/"} className='button_div2'>

                            <h5>1mpx - G series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/2mpx - Q series/"} className='button_div2'>

                            <h5>2mpx - Q series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/5mpx - U series/"} className='button_div2'>

                            <h5>5mpx - U series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/8mpx - T series/"} className='button_div2'>

                            <h5>8mpx - T series/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HW_DVR;