import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_11_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/For%201.5.0%20indoor%20station%20BETA/DS-K1T501_EN_GM_V1.1.0_build180730.zip"
              }
              className="button_div2"
            >
              <h5>DS-K1T501_EN_GM_V1.1.0_build180730.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_11_2;
