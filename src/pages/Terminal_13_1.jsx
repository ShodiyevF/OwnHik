import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/SDK/EhomeSDK_V1.2.1.5_build20171101_EN.zip"
              }
              className="button_div2"
            >
              <h5>EhomeSDK_V1.2.1.5_build20171101_EN.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/SDK/HCNetSDKV5.3.5.15_build20180119_win32_EN.zip"
              }
              className="button_div2"
            >
              <h5>HCNetSDKV5.3.5.15_build20180119_win32_EN.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_1;
