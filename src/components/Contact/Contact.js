import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core';
import { LinkedIn, Instagram } from '@material-ui/icons';
import './Contact.css'
const Contact = () => {
	return (
		<Element className="contact" id="contact">
			<h1>Contact</h1>
			<div className="contact_container">
				<p>
					Email:<span>lakthanabca@gmail.com</span>
				</p>
				<p>
					Github Username:<span>Lakshmi5524</span>
				</p>
				<p>
					Mobile Number:<span>7397330045</span>
				</p>
				<div className="contact_icon">
					<a href="">
						<IconButton>
							<Instagram />
						</IconButton>
					</a>

					<a href="https://www.linkedin.com/in/lakshmi-saravanan-584015214/" target="_blank">
						<IconButton>
							<LinkedIn />
						</IconButton>
					</a>
				</div>
			</div>
		</Element >
	)
}

export default Contact
