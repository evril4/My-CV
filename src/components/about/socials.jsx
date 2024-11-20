import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";



import "./styles/socials.css";

const Socials = ({data}) => {

	return (
		<div className="socials">
			{data && <div>
				<div className="social">
					<a href={data.socials.twitter} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faTwitter}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Twitter</div>
					</a>
				</div>

				<div className="social">
					<a href={data.socials.github} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faGithub}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on GitHub</div>
					</a>
				</div>

				<div className="social">
					<a
						href={data.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faLinkedin}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on LinkedIn</div>
					</a>
				</div>

				<div className="social">
					<a
						href={data.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faInstagram}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Instagram</div>
					</a>
				</div>

				<div className="email">
					<div className="email-wrapper">
						<a
							href={`mailto:${data.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>

							<div className="social-text">{data.main.email}</div>
						</a>
					</div>
				</div>
			</div>}
		</div>
	);
};

export default Socials;
