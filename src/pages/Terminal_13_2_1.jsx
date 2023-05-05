import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_2_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/ARM/ACS_1T604__AI0_EN_GM_V1.0.0_build180425.zip"
              }
              className="button_div2"
            >
              <h5>ACS_1T604__AI0_EN_GM_V1.0.0_build180425.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/ARM/%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E.txt"
              }
              className="button_div2"
            >
              <h5>更新说明.txt </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_2_1;
