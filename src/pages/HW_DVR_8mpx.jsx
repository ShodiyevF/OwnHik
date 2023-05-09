import React from 'react';
import { Link } from 'react-router-dom';

function HW_DVR_8mpx(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/8mpx - T series/1"} className='button_div2'>

                            <h5>4.21.000/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/8mpx - T series/2"} className='button_div2'>

                            <h5>4.21.100/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/8mpx - T series/3"} className='button_div2'>

                            <h5>4.25.001/</h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HW_DVR_8mpx;