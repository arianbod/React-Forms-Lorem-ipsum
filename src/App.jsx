import { useState } from 'react';
import { Text, Title, Form } from './components';
import textData from './data';

const App = () => {
	const [quantityState, setQuantityState] = useState(1);
	const [textsState, setTextsState] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form has been submitted');
		setTextsState(textData.slice(0, quantityState));
	};
	const handleChange = (e) => {
		setQuantityState(e.target.value > 1 ? parseInt(e.target.value) : 1);
	};
	return (
		<>
			<section className='section-center'>
				<Title />
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					Quantity={quantityState}
				/>
				<Text
					Quantity={quantityState}
					texts={textsState}
				/>
			</section>
		</>
	);
};
export default App;
