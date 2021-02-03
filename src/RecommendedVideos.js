import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import bobProctor from './bobProctor.JPG';
import channelLogo from './channelLogo.JPG';
import Memories from './Memories.JPG';

function RecommendedVideos() {
	return (
		<div className='recommendedVideos'>
			<h2>Recommended</h2>
			<div className='recommendedVideos__videos'>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={bobProctor}
				/>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={Memories}
				/>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={bobProctor}
				/>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={bobProctor}
				/>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={bobProctor}
				/>
				<VideoCard
					title='See The Invisible!| Bob Proctor Masterclass Exclusive Preview'
					views='2.3M Views'
					timeStamp='3 days ago'
					channelImage={channelLogo}
					channel='Proctor Gallegher Institute'
					image={Memories}
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;
