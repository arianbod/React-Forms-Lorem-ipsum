import React from 'react';

const Text = ({ texts, Quantity = 1 }) => {
	console.log(texts);
	return (
		<article className='lorem-text'>
			{texts.map((item) => (
				<p>{item}</p>
			))}
		</article>
	);
};

export default Text;
