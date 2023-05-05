import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_6_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/6/1/1"}
              className="button_div2"
            >
              <h5>Controller (ARM)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/6/1/2"}
              className="button_div2"
            >
              <h5>Extension Module( MCU)/ </h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T201A/V1.3.1_build200528/DS-K1T201A%20Series%20Terminal%20V1.3.1_build200528%20Release%20Note.docx"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T201A Series Terminal V1.3.1_build200528 Release Note.docx
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_6_1;
