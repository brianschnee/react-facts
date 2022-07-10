import React from 'react';

function Main() {
	return (
		<main className='main'>
			<img
				className='main-logo'
				src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
				alt='react logo'
			/>
			<h1 className='title'>Fun facts about React</h1>
			<ul className='main-list'>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on Github</li>
				<li>Is maintained by Facebook</li>
				<li>
					Powers thousands of enterprise apps, including mobile
					apps
				</li>
			</ul>
		</main>
	);
}

export default Main;
