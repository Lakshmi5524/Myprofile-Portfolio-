import React, { useState } from 'react'
import './Project.css'

const Project = ({ imge, title, desc, link }) => {
	const [show, setSow] = useState(false);
	return (
		<a href={link}>

			<div className="project" onMouseEnter={() => setSow(true)} onMouseLeave={() => setSow(false)}>
				{
					show ? (
						<div className="project_content">
							<h4>{title}</h4>
							<p>{desc}</p>
						</div >
					) : (
						<img src={imge} alt="image" />
					)
				}

			</div >
		</a >
	);
};

export default Project
