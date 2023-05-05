import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_14_4() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/Access Control/Terminal/14/4/1"
              }
              className="button_div2"
            >
              <h5>ARM/</h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T605/V1.2.1_build190918/DS-K1T605%20Series%20Terminal%20V1.2.1_build190918%20Release%20Note.docx"
              }
              className="button_div2"
            >
              <h5>DS-K1T605 Series Terminal V1.2.1_build190918 Release Note.docx</h5>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_14_4;
