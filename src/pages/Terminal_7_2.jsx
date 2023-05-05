import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_7_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/7/2/1"}
              className="button_div2"
            >
              <h5>ARM/ </h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T331/V3.1.0_build200331/DS-K1T331%20Series%20MinMoe%20Terminal%20Release%20Notes_V3.1.0_build200331.pdf"
              }
              className="button_div2"
            >
              <h5>
                DS-K1T331 Series MinMoe Terminal Release Notes_V3.1.0_build200331.pdf
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_7_2;
