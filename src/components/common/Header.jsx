import { Twirl as Hamburger } from 'hamburger-react';
import logo from '../../data/images/Naeem-logo.png';
import { navLink } from '../../data/data';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Header = () => {
	const [responsive, setResponsive] = useState(false);
	const toggleMenu = () => {
		setResponsive(!responsive);
		// Add or remove the class to disable/enable scrolling
		if (!responsive) {
			document.body.classList.add('disable-scroll');
		} else {
			document.body.classList.remove('disable-scroll');
		}
	};
	return (
		<>
			<header>
				<div className='container flexsb'>
					<div className='logo'>
						<img width={'70%'} src={logo} alt='logo' data-aos='zoom-in-right' />
					</div>
					<div className={`menu ${responsive ? 'showMenu' : 'hideMenu'}`}>
						{navLink.map((links, i) => (
							<Link to={links.url} key={i}>
								<span> {links.text}</span>
							</Link>
						))}
					</div>
					<div className='toggle'>
						<Hamburger size={24} toggled={responsive} toggle={toggleMenu} />
					</div>
				</div>
			</header>
		</>
	);
};
