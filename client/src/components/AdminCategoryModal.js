import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showLoading } from '../helpers/loading';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from '../redux/actions/categoryActions';
const AdminCategoryModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/

	const { loading } = useSelector(state => state.loading);

	const dispatch = useDispatch();
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [category, setCategory] = useState('');
	


	const handleCategoryChange = evt => {
	
		setCategory(evt.target.value);
	};

	const handleCategorySubmit = evt => {
		evt.preventDefault();

		if (isEmpty(category)) {
			
		} else {
			const data = { category };
			dispatch(createCategory(data));
			setCategory('');
		}
	};

	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id='addCategoryModal' className='modal' >
			<div className='modal-dialog modal-dialog-centered modal-lg'>
				<div className='modal-content'>
					<form onSubmit={handleCategorySubmit}>
						<div className='modal-header bg-info text-white'>
							<h5 className='modal-title'>Add Category</h5>
							<button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
						<div className='modal-body my-2'>
							

							{loading ? (
								<div className='text-center'>
									{showLoading()}
								</div>
							) : (
								<Fragment>
									<label className='text-secondary'>
										Category
									</label>
									<input
										type='text'
										className='form-control'
										name='category'
										value={category}
										onChange={handleCategoryChange}
									/>
								</Fragment>
							)}
						</div>
						<div className='modal-footer'>
							<button
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='submit' className='btn btn-info'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminCategoryModal;
