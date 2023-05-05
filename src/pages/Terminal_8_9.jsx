import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_9() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/8/9/1"}
              className="button_div2"
            >
              <h5>MCU(Extension Module)/</h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.2.30_build220210/ACS_641_AI3_EN_STD_V3.2.30_build220210.zip"
              }
              className="button_div2"
            >
              <h5>ACS_641_AI3_EN_STD_V3.2.30_build220210.zip</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_9;
