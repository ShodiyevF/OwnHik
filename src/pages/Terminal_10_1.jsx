import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_10_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T500SF/DZ20170912_041%20DS-K1T500S%20for%20V3.3.0%20HC3.3/DZ20170912_041__H2_EN_GM_V1.1.0_build171215.zip"
              }
              className="button_div2"
            >
              <h5>DZ20170912_041__H2_EN_GM_V1.1.0_build171215.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_10_1;
