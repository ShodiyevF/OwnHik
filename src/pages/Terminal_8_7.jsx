import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";
import SecureModule from "./SecureModule";

function Terminal_8_7() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/8/7/1"}
              className="button_div2"
            >
              <h5>ARM(Controller)/</h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Access Control/Terminal/8/7/2"}
              className="button_div2"
            >
              <h5>MCU(Extension Module)/ </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal_8_7;
