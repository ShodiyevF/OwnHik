import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_14_3_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T605/V1.2.0_build190724%20Rus/MCU/ACS_MCU-TRIANGLE_GML_GM_V1.0.0_build190222.zip"
              }
              className="button_div2"
            >
              <h5>ACS_MCU-TRIANGLE_GML_GM_V1.0.0_build190222.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_14_3_2;
