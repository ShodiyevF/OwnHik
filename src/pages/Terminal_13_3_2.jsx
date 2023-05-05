import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_3_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.1.1_build190423/MCU/ACS_DS-K1T604_GML_STD_V1.0.0_build190220_Net.bin"
              }
              className="button_div2"
            >
              <h5>ACS_DS-K1T604_GML_STD_V1.0.0_build190220_Net.bin</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.1.1_build190423/MCU/ACS_DS-K1T604_GML_STD_V1.0.0_build190220_Serial.bin"
              }
              className="button_div2"
            >
              <h5>ACS_DS-K1T604_GML_STD_V1.0.0_build190220_Serial.bin</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_3_2;
