import React from "react"
import { Element } from "react-scroll"
import skillimg from "../../image/web3.webp"
import './SkillContainer.css'
import LinearProgress from '@material-ui/core/LinearProgress';

const SkillContainer = () => {
	return (

		<Element className="skillContainer" name="skill">
			<div className="skillContainer_image">
				<img src={skillimg} alt="image" />;
			</div>
			<div className="skillContainer_text">
				<h2>SKILLSET</h2>
				<div className="skillContainer_skillset">
					<h5>HTML</h5>
					<div className="skillContainer_slider skillContainer_slider1">
						<LinearProgress variant="determinate" value={80} />
					</div>
				</div>

				<div className="skillContainer_skillset">
					<h5>Css</h5>
					<div className="skillContainer_slider skillContainer_slider2">
						<LinearProgress variant="determinate" value={70} />
					</div>
				</div>
				<div className="skillContainer_skillset">
					<h5>Javascript</h5>
					<div className="skillContainer_slider skillContainer_slider3">
						<LinearProgress variant="determinate" value={60} />
					</div>
				</div>
				<div className="skillContainer_skillset">
					<h5>Reactjs</h5>
					<div className="skillContainer_slider skillContainer_slider4">
						<LinearProgress variant="determinate" value={90} />
					</div>
				</div>

				<div className="skillContainer_skillset">
					<h5>Nodejs</h5>
					<div className="skillContainer_slider skillContainer_slider5">
						<LinearProgress variant="determinate" value={60} />
					</div>
				</div>
				<div className="skillContainer_skillset">
					<h5>Mongodb</h5>
					<div className="skillContainer_slider skillContainer_slider6">
						<LinearProgress variant="determinate" value={50} />
					</div>
				</div>
				<div className="skillContainer_skillset">
					<h5>Aws</h5>
					<div className="skillContainer_slider skillContainer_slider7">
						<LinearProgress variant="determinate" value={50} />
					</div>
				</div>
			</div>
		</Element >

	)
}

export default SkillContainer
