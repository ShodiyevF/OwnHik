import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_11_4() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/V1.1.0_build181115%28Europe%20version%29/ACS_00_H2_EN_GM_V1.1.0_build181115.zip"
              }
              className="button_div2"
            >
              <h5>ACS_00_H2_EN_GM_V1.1.0_build181115.zip </h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/V1.1.0_build181115%28Europe%20version%29/how%20to%20call%20indoor%20station%20and%20hik-connect%20by%20access%20controller.pdf"
              }
              className="button_div2"
            >
              <h5>
                how to call indoor station and hik-connect by access controller.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_11_4;
