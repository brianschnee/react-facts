import React from 'react';

function Navbar() {
	return (
		<nav className='navbar'>
			<img
				className='nav-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
				alt='react logo'
			/>
			<h2 className='react-facts'>React Facts</h2>
			<h4 className='course'>React Course - Project 1</h4>
		</nav>
	);
}

export default Navbar;
