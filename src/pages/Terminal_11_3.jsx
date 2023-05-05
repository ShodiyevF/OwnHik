import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_11_3() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/For%20Intercom%202.0/DZP20190513156__H2_EN_GM_V1.1.0_build190603.zip"
              }
              className="button_div2"
            >
              <h5>DZP20190513156__H2_EN_GM_V1.1.0_build190603.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_11_3;
