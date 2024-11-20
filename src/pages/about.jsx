import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";


import "./styles/about.css";

const About = ({ data, pageSeo }) => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				{data &&
					<div><title>{`About | ${data.main.title}`}</title>
						<meta name="description" content={pageSeo.description} />
						<meta
							name="keywords"
							content={pageSeo.keywords.join(", ")}
						/>
					</div>}
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{data && data.about.title}
								</div>

								<div className="subtitle about-subtitle"> 
									{data && data.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										{data && <img
											src={`data:image/png;base64,${data.image}`}
											alt="about"
											className="about-image"
										/>}		
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
