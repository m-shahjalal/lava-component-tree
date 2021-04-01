import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Testimonial from '../components/Testimonial';
import Welcome from '../components/Welcome';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Welcome />
			<About />
			<div class='left-image-decor'></div>
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
