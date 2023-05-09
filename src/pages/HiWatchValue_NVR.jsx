import { Link } from "react-router-dom";

export default function HiWatchValue_NVR() {
	return (
		<div>
			<div className="home_div">
				<div className="home_div2">
					<div className="button_div">
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/1"}
							className="button_div2"
						>
							<h5>DS-N204P_208P(C)/</h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/2"}
							className="button_div2"
						>
							<h5>DS-N204_208(C)/ </h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/3"}
							className="button_div2"
						>
							<h5>DS-N204_N208(B)/ </h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/4"}
							className="button_div2"
						>
							<h5>DS-N304_N308 Wi-Fi (B)/</h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/5"}
							className="button_div2"
						>
							<h5>DS-N304_N308_N308-2_N316_N316-2(C)/</h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/6"}
							className="button_div2"
						>
							<h5>DS-N304_N308_N308-2_N316_N316-2(D)/ </h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/7"}
							className="button_div2"
						>
							<h5>DS-N304_N308_N316_N332(B)/</h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Value/NVR (IP regs)/8"}
							className="button_div2"
						>
							<h5>Old models/</h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
