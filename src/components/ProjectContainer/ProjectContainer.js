import React from 'react'
import { Element } from "react-scroll"
import Project from '../Project/Project.js';
import "./ProjectContainer.css"


const ProjectContainer = () => {
	const projects = [
		{
			imge: "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5-Server-thumb.jpg",
			title: "DashBoard",
			desc: "dashboard is to provide a comprehensive snapshot of performanc, Analytical Dashboards – Use data from the past to identify trends that can influence future decision-making",
			link: "https://github.com/Lakshmi5524/dashboard"

		},

		{
			imge: "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5-Server-thumb.jpg",
			title: "Pizza Delivery",
			desc: "Delivery Sunnyvale. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.",
			link: "https://github.com/Lakshmi5524/PizzaDeliveryClient"
		},


	];
	return (
		<Element className="projectContainer" name="project" >

			<h1>Projects</h1 >
			<p>Here are some projects which i done for making for beginner level</p>
			<div className="projectContainer_projects">
				{projects.map((project, index) => {
					return (

						<Project
							key={index}
							imge={project.imge}
							title={project.title}
							desc={project.desc}
							link={project.link}
						/>
					)
				})}

			</div >
		</Element >
	)
}

export default ProjectContainer
