import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_16() {
    return (
			<div>
				<div className="home_div">
					<div className="home_div2">
						<div className="button_div">
							<Link
								to={
									"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T607/V1.0.0_190826%20Rus/DS-K1T607_01_H10_EN_STD_V1.0.0_190826.zip"
								}
								className="button_div2"
							>
								<h5>
									V1.0.0_190826 Rus/ DS-K1T607_01_H10_EN_STD_V1.0.0_190826.zip{" "}
								</h5>
							</Link>
							<Link
								to={"/Firmware/Hikvision/Access Control/Terminal/16/2"}
								className="button_div2"
							>
								<h5>V2.0.0_190920/</h5>
							</Link>
							<Link
								to={"/Firmware/Hikvision/Access Control/Terminal/16/3"}
								className="button_div2"
							>
								<h5>V2.0.1_191012/ </h5>
							</Link>
							<Link
								to={"/Firmware/Hikvision/Access Control/Terminal/16/4"}
								className="button_div2"
							>
								<h5>V2.0.2_200423/</h5>
							</Link>
							<Link
								to={"/Firmware/Hikvision/Access Control/Terminal/16/5"}
								className="button_div2"
							>
								<h5>V2.0.2_200601/</h5>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Terminal_16                              