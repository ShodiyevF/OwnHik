import { Link } from "react-router-dom";

export default function HiWatchPro_IP() {
	return (
		<div>
			<div className="home_div">
				<div className="home_div2">
					<div className="button_div">
						<Link
							to={"/Firmware/HiWatch Pro/IP Cameras/1"}
							className="button_div2"
						>
							<h5>IPC-XXXX-G0/ </h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Pro/IP Cameras/2"}
							className="button_div2"
						>
							<h5>IPC-XXXX-G2/ </h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
