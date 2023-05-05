import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_7_8() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T331/V3.2.30_build210406/ACS_331_AI2_EN_STD_V3.2.30_build210406.zip"
              }
              className="button_div2"
            >
              <h5>ACS_331_AI2_EN_STD_V3.2.30_build210406.zip </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_7_8;
