import { Splash } from './components/splash/Splash';
import { Pages } from './components/pages/Pages';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

function App() {
	const [splash, setSplash] = useState(true);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setSplash(false);
		}, 3000);
	}, []);

	return <div className='App'>{splash ? <Splash /> : <Pages />}</div>;
}

export default App;
