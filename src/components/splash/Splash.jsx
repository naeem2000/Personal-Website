import splashData from './animation_lkuvushm.json';
import Lottie from 'lottie-react';
import React from 'react';

export const Splash = () => {
	return (
		<div className='splash'>
			<Lottie animationData={splashData} loop={true} className='splasher' />
		</div>
	);
};
