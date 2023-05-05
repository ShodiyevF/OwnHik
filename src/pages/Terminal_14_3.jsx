import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_14_3() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/Access Control/Terminal/14/3/1"
              }
              className="button_div2"
            >
              <h5>ARM/</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/Access Control/Terminal/14/3/2"
              }
              className="button_div2"
            >
              <h5>MCU/</h5>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_14_3;
