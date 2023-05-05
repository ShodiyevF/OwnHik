import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_7_2_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T331/V3.1.0_build200331/ARM/ACS_331_AI2_EN_GM_V3.1.0_build200331.zip"
              }
              className="button_div2"
            >
              <h5>ACS_331_AI2_EN_GM_V3.1.0_build200331.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_7_2_1;
