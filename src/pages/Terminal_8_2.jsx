import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/8/2/1"}
              className="button_div2"
            >
              <h5>ARM/</h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/8/2/2"}
              className="button_div2"
            >
              <h5>MCU/ </h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T341A/V3.1.7_build200616/DS-K1T341A%20Series%20MinMoe%20Terminal%20V3.1.7_build200616%20Release%20Note.pdf"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T341A Series MinMoe Terminal V3.1.7_build200616 Release Note.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_2;
