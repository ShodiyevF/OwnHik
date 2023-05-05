import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_2_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.1.7_build200616/ARM/ACS_641_AI3_EN_GM_V3.1.7_build200616.zip"
              }
              className="button_div2"
            >
              <h5>ACS_641_AI3_EN_GM_V3.1.7_build200616.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_2_1;
