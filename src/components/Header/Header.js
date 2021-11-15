import React from 'react'
import { Link } from "react-scroll"
import './Header.css'

const Header = () => {
	return (
		<div className="header">
			<div className="header_left">
				<h1>Develo<span>per</span></h1>
			</div>
			<div className="header_right">
				<Link to="about" smooth={true} duration={500}>
					<h4>About Me</h4>
				</Link>

				<Link to="skill" smooth={true} duration={500}>
					<h4>Skill</h4>
				</Link>

				<Link to="project" smooth={true} duration={500}>
					<h4>Projects</h4>
				</Link>

				<Link to="experience" smooth={true} duration={500}>
					<h4>Experience</h4>
				</Link>

				<Link to="contact" smooth={true} duration={500}>
					<h4>contact</h4>
				</Link>
				<a className="link" href="https://github.com/Lakshmi5524" target="_blank">Github</a>
			</div>
		</div >
	)
}

export default Header
