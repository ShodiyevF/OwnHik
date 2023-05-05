import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_10_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.2.30_build220610/MCU/EM_ACS_DS-K1T64X_125K_ST1_GML_GM_V1.0.1_build220226_Net.bin"
              }
              className="button_div2"
            >
              <h5>
                EM_ACS_DS-K1T64X_125K_ST1_GML_GM_V1.0.1_build220226_Net.bin
              </h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.2.30_build220610/MCU/Mifare_ACS_DS-K1T64X_13.56M_ST1_GML_GM_V1.0.1_build220226_Net.bin"
              }
              className="button_div2"
            >
              <h5>
                Mifare_ACS_DS-K1T64X_13.56M_ST1_GML_GM_V1.0.1_build220226_Net.bin
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_10_1;
