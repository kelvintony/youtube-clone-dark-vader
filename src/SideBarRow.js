import React from 'react';
import './SideBarRow.css';

function SideBarRow({ Icon, title, selected }) {
	return (
		// here we are writting javascript inside the className isn't it ammazing
		// simply means if selected is true add the selected class
		//this makes the home menu tab appear selected as default.
		<div className={`sideBarRow ${selected && 'selected'}`}>
			<Icon className='sideBar__icon ' />
			<h1 className='sideBar__title'>{title}</h1>
		</div>
	);
}

export default SideBarRow;
