import { Link } from "react-router-dom"

export default function HiWatchPro_ACCESS() {
	return (
		<div>
			<div className="home_div">
				<div className="home_div2">
					<div className="button_div">
						<Link
							to={"/Firmware/HiWatch Pro/Access control/1"}
							className="button_div2"
						>
							<h5>Access controller/ </h5>
						</Link>
						<Link
							to={"/Firmware/HiWatch Pro/Access control/2"}
							className="button_div2"
						>
							<h5>Terminal/ </h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
