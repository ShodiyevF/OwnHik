import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_13_3() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/13/3/1"}
              className="button_div2"
            >
              <h5>Hicore/</h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/13/3/2"}
              className="button_div2"
            >
              <h5>MCU/</h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.1.1_build190423/DS-K1T604%20V1.1.1build190423%20Release%20Notes.docx"
              }
              className="button_div2"
            >
              <h5>DS-K1T604 V1.1.1build190423 Release Notes.docx</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/V1.1.1_build190423/DS-K5603-Z%E3%80%81604%20V1.1.1%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E.docx"
              }
              className="button_div2"
            >
              <h5>DS-K5603-Z、604 V1.1.1版本更新说明.docx </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_13_3;
