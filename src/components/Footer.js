import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path);
		window.scrollTo(0, 0); // Scroll to top instead of reloading
	};

	return (
		<footer className="footer-container">
			<div className="footer-content-wrapper">
				<div className="footer-text-container">
					<div className="footer-column-container">
						<div className="footer-column-heading">Online Learning</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/online_learning")}
						>
							Courses
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/online_learning")}
						>
							Colleges
						</div>
					</div>
					<div className="footer-column-container">
						<div className="footer-column-heading">Fashion</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Mens")}
						>
							Men's Wear
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Women")}
						>
							Women's Wear
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Kids")}
						>
							Kids's Wear
						</div>
					</div>
					<div className="footer-column-container">
						<div className="footer-column-heading">Electronics</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Electronics")}
						>
							Mobile And Accessories
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Mens")}
						>
							Health Care
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/products/Mens")}
						>
							Home Appliances
						</div>
					</div>
					<div className="footer-column-container">
						<div className="footer-column-heading">Banking</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/banking")}
						>
							Credit Cards
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/banking")}
						>
							Zero Saving Accounts
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/banking")}
						>
							Saving Applications
						</div>
					</div>
					<div className="footer-column-container">
						<div className="footer-column-heading">Resources</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/")}
						>
							Blogs
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/")}
						>
							User guides
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/faq")}
						>
							FAQs
						</div>
					</div>
					<div className="footer-column-container">
						<div className="footer-column-heading">Company</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/about")}
						>
							About us
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/about")}
						>
							Contact us
						</div>
						<div
							className="footer-column-text"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/company/unlockdiscounts/jobs/",
									"_blank"
								)
							}
						>
							Internships
						</div>
						<div
							className="footer-column-text"
							onClick={() => handleNavigation("/certificate_verification")}
						>
							Certificate Verification
						</div>
					</div>
				</div>
				<div className="footer-bottom-section">
					<div className="footer-terms">
						<p className="footer-terms-text">© 2024 UnlockDiscounts, Inc.</p>
						<p className="footer-terms-dot">•</p>
						<p className="footer-terms-text">Privacy</p>
						<p className="footer-terms-dot">•</p>
						<p className="footer-terms-text">Terms</p>
						<p className="footer-terms-dot">•</p>
						<p className="footer-terms-text">Sitemap</p>
					</div>
					<div className="footer-social-container">
						<FaInstagram
							className="footer-social-logo"
							onClick={() =>
								window.open(
									"https://www.instagram.com/unlock_discounts/",
									"_blank"
								)
							}
						/>
						<FaFacebook
							className="footer-social-logo"
							onClick={() =>
								window.open(
									"https://www.facebook.com/people/UnlockDiscounts/61560425212006/?mibextid=ZbWKwL",
									"_blank"
								)
							}
						/>
						<FaLinkedin
							className="footer-social-logo"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/company/unlockdiscounts/posts/?feedView=all",
									"_blank"
								)
							}
						/>
						<FaYoutube
							className="footer-social-logo"
							onClick={() =>
								window.open(
									"https://www.youtube.com/@UnlockDiscounts",
									"_blank"
								)
							}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
