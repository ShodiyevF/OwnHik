import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_8() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.2.30_build210609/ACS_641_AI3_EN_STD_V3.2.30_build210609.zip"
              }
              className="button_div2"
            >
              <h5>ACS_641_AI3_EN_STD_V3.2.30_build210609.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.2.30_build210609/DS-K1T341A%20Series%20MinMoe%20Terminal%20Release%20Notes_V3.2.30_build210609.pdf"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T341A Series MinMoe Terminal Release Notes_V3.2.30_build210609.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_8;
