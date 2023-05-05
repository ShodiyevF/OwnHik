import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_7_6() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T331/V3.1.4_build201127/ACS_331_AI2_EN_GM_V3.1.4_build201127.zip"
              }
              className="button_div2"
            >
              <h5>ACS_331_AI2_EN_GM_V3.1.4_build201127.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T331/V3.1.4_build201127/DS-K1T331%20Series%20MinMoe%20Terminal%20Release%20Notes_V3.1.4_build201127.pdf"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T331 Series MinMoe Terminal Release Notes_V3.1.4_build201127.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_7_6;
