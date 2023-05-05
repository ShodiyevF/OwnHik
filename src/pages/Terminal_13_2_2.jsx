import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_2_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/MCU/ACS_DS-K5604_GML_STD_V1.0.0_build180305.zip"
              }
              className="button_div2"
            >
              <h5>ACS_DS-K5604_GML_STD_V1.0.0_build180305.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_2_2;
