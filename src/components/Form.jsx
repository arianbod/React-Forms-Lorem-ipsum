import React, { useState } from 'react';

const Form = ({ Quantity, handleChange, handleSubmit }) => {
	return (
		<form
			className='lorem-form'
			onSubmit={handleSubmit}>
			<label htmlFor='number'>Paragraphs</label>
			<input
				id='number'
				name='number'
				type='number'
				value={Quantity}
				onChange={handleChange}
				min='1'
				step='1'
				max='8'
			/>
			<button className='btn'>Generate</button>
		</form>
	);
};

export default Form;
