import splashData from './loaderAnimated.json';
import Lottie from 'lottie-react';
import React from 'react';

export const Splash = () => {
	return (
		<>
			<Lottie
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				animationData={splashData}
				loop={true}
			/>
		</>
	);
};
