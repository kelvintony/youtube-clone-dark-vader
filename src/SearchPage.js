import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import bobProctor from './bobProctor.JPG';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import Memories from './Memories.JPG';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image={bobProctor}
				channel='Proctor Gallegher Institute'
				verified
				subs='1.4M'
				noOfVideos={906}
				description='maximizing the human potential to achieve the most out of live Think And Grow Rich with bob proctor'
			/>
			<hr />
			<VideoRow
				title='Activating The Beast Mode For Achievement'
				subs='908K'
				views='790K'
				timeStamp='45 seconds ago'
				channel='Eric Thomas- The Hipop Preacher'
				image={Memories}
				description='best motivational video out there to get you pumped up to taking bold steps for greatness'
			/>
			<VideoRow
				title='Activating The Beast Mode For Achievement'
				subs='908K'
				views='790K'
				timeStamp='45 seconds ago'
				channel='Eric Thomas- The Hipop Preacher'
				image={Memories}
				description='best motivational video out there to get you pumped up to taking bold steps for greatness'
			/>
			<VideoRow
				title='Activating The Beast Mode For Achievement'
				subs='908K'
				views='790K'
				timeStamp='45 seconds ago'
				channel='Eric Thomas- The Hipop Preacher'
				image={Memories}
				description='best motivational video out there to get you pumped up to taking bold steps for greatness'
			/>
			<VideoRow
				title='Activating The Beast Mode For Achievement'
				subs='908K'
				views='790K'
				timeStamp='45 seconds ago'
				channel='Eric Thomas- The Hipop Preacher'
				image={Memories}
				description='best motivational video out there to get you pumped up to taking bold steps for greatness'
			/>
			<VideoRow
				title='Activating The Beast Mode For Achievement'
				subs='908K'
				views='790K'
				timeStamp='45 seconds ago'
				channel='Eric Thomas- The Hipop Preacher'
				image={Memories}
				description='best motivational video out there to get you pumped up to taking bold steps for greatness'
			/>
		</div>
	);
}

export default SearchPage;
