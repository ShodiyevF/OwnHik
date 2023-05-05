import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_10_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T500SF/For%201.4.71%20indoor%20station/DS-K1T500_EN_GM_V1.1.0_build180329.zip"
              }
              className="button_div2"
            >
              <h5>DS-K1T500_EN_GM_V1.1.0_build180329.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T500SF/For%201.4.71%20indoor%20station/How%20to%20use%20K1T500%20or%20K1T501%20to%20connect%20to%20indoor%20station%28v1.4.71%29.pdf"
              }
              className="button_div2"
            >
              <h5>
                How to use K1T500 or K1T501 to connect to indoor station28v1.4.7129.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_10_2;
