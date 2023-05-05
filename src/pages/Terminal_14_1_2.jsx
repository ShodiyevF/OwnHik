import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_14_1_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T605/V1.2.0_build181114/MCU/ACS_DS-K1T60X_GM_STD_1.0.0_180612_Net.bin"
              }
              className="button_div2"
            >
              <h5>ACS_DS-K1T60X_GM_STD_1.0.0_180612_Net.bin</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T605/V1.2.0_build181114/MCU/ACS_DS-K1T60X_GM_STD_1.0.0_180612_Serial.bin"
              }
              className="button_div2"
            >
              <h5>ACS_DS-K1T60X_GM_STD_1.0.0_180612_Serial.bin</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_14_1_2;
