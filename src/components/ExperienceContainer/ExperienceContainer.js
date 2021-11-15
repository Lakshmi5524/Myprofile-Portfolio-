import React from 'react'
import { Element } from "react-scroll"
import './ExperienceContainer.css'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
const ExperienceContainer = () => {
	return (
		<Element className="experienceContainer" name="experience">
			<h1>Experience</h1>
			<div className="experienceContainer_info">
				<ExperienceBox number="2+" title="MERN projects" style={{
					color: "#fff"
				}} />
				< ExperienceBox number="20+" title="Projects" style={{ backgroundColor: "#f64c08" }} />
				<ExperienceBox number="6" title="Months Learning" style={{
					color: "#fff"
				}} />

			</div>
		</Element >
	)
}

export default ExperienceContainer
