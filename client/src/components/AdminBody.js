import React from 'react';
import Card from './Card';
// redux
import { useSelector } from 'react-redux';

const AdminBody = () => {
	const { products } = useSelector(state => state.products);

	return (
		<div className="container">
			<Card/>
		</div>
	);
};

export default AdminBody;
