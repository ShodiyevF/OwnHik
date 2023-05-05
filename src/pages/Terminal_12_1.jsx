import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_12_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T502/V1.7.1_build220719/AIS_FRACS_502_F1pro_EN_STD_V1.7.1_build220719.zip"
              }
              className="button_div2"
            >
              <h5>AIS_FRACS_502_F1pro_EN_STD_V1.7.1_build220719.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T502/V1.7.1_build220719/DS-K1T502%20Series%20Access%20Control%20Terminal%20V1.7.1_build220719%20Release%20Note.pdf"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T502 Series Access Control Terminal V1.7.1_build220719 Release Note.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_12_1;
