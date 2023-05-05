import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_3_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.1.1_build190423/Hicore/ACS_5604_17_AI0_EN_GM_V1.1.1_build190423.zip"
              }
              className="button_div2"
            >
              <h5>ACS_5604_17_AI0_EN_GM_V1.1.1_build190423.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_3_1;
