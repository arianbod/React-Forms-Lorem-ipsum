import React from 'react';
import { nanoid } from 'nanoid';
const Text = ({ texts, Quantity = 1 }) => {
	return (
		<article className='lorem-text'>
			{texts.map((item) => {
				let id = nanoid();
				return <p key={id}>{item}</p>;
			})}
		</article>
	);
};

export default Text;
