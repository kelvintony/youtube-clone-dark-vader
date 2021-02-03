import React, { useState } from 'react';
import youtubeIcon from './youtubeIcon.JPG';
import kelvinImage from './kelvinImage.JPG';
import './Header.css';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
	const [ inputSearch, setInputSearch ] = useState('');
	return (
		<div className='header'>
			<div className='header__left'>
				<MenuIcon />
				<Link to='/'>
					<img className='header__logo' src={youtubeIcon} alt='' />
				</Link>
			</div>

			<div className='header__input'>
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder='search'
					type='text'
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className='header__inputButton' />
				</Link>
			</div>

			<div className='header__icons'>
				<VideoCallIcon className='header__icon' />
				<AppsIcon className='header__icon' />
				<NotificationsIcon className='header__icon' />
				<Avatar alt='kelvin' src={kelvinImage} />
			</div>
		</div>
	);
}

export default Header;
