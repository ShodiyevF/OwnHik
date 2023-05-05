import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_6_3() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T201A/V1.3.39_build210922/ACS_1T201A_AI2_EN_GM_V1.3.39_build210922.zip"
              }
              className="button_div2"
            >
              <h5>ACS_1T201A_AI2_EN_GM_V1.3.39_build210922.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_6_3;
