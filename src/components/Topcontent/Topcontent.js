import React from 'react'
import { Link } from "react-scroll"
import "./Topcontent.css"

const Topcontent = () => {
	return (
		<div className="topContent">
			<div className="topContent_container">
				<h1>Ms.Lakshmi</h1>
				<p>MERN Stack Web Developer</p>

				<a href="https://drive.google.com/file/d/18qU4r4KuoiGyepii5TpmRsgdYoTz_nuu/view?usp=sharing" target="_blank">
					<button className="topcontent_dounloadbutton">Download</button>
				</a>
				<Link to="projects" smooth={true} duration={500}>
					<button className="topcontent_workbutton">
						My Work
					</button>
				</Link>
			</div >
		</div >
	)
}

export default Topcontent
