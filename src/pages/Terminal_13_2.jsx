import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/13/2/1"}
              className="button_div2"
            >
              <h5>ARM/</h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/13/2/2"}
              className="button_div2"
            >
              <h5>MCU/</h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/1.upgrade%20MCU.png"
              }
              className="button_div2"
            >
              <h5>1.upgrade MCU.png</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/2.upgrade%20ARM.png"
              }
              className="button_div2"
            >
              <h5>2.upgrade ARM.png</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/K1T604%20Series%20Face%20Recognition%20Terminal%20Release%20Notes.docx"
              }
              className="button_div2"
            >
              <h5>
                K1T604 Series Face Recognition Terminal Release Notes.docx
              </h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.0.0_build180425/Upgrade%20Instruction.txt"
              }
              className="button_div2"
            >
              <h5>Upgrade Instruction.txt</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_2;
