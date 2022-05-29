import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import { useSelector } from 'react-redux';

const Header = ({ history }) => {
	const { cart } = useSelector(state => state.cart);

	const handleLogout = evt => {
		logout(() => {
			history.push('/signin');
		});
	};

	// views
	const showNavigation = () => (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			
			<div className="mail-service pl-5">
          <i className=" fa fa-envelope" />
          hello.colorlib@gmail.com
        </div>
		<div className="phone-service pl-5">
          <i className=" fa fa-phone" />
          +65 11.188.888
        </div>
		

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
				<ul className='navbar-nav ml-auto mt-2 mt-lg-0 bg-white'>
				<div className="lan-selector">
          <select
            className="language_drop"
            name="countries"
            id="countries"
            style={{ width: 100 }}
          >
            <option
              value="yt"
              data-image="./images/flag-1.jpg"
              data-imagecss="flag yt"
              data-title="English"
            />
            English
            <option
              value="yu"
              data-image="./images/flag-2.jpg"
              data-imagecss="flag yu"
              data-title="Bangladesh"
            >
              German{" "}
            </option>
          </select>
        </div>
					{!isAuthenticated() && (
						<Fragment>
							<li>
								<Link to='/' className='nav-link'>
									<i className='fas fa-home'></i> Home
								</Link>
							</li>
							<li >
								<Link to='/Shope' className='nav-link'>
									<i className='fas fa-shopping-bag'></i> Shop
								</Link>
							</li>
							<li
								
								style={{ position: 'relative' }}
							>
								<Link to='/cart' className='nav-link'>
									<i className='fas fa-shopping-cart'></i>{' '}
									Cart{' '}
									<span
										className='badge badge-danger'
										style={{
											position: 'absolute',
											top: '0px',
										}}
									>
										{cart.length}
									</span>
								</Link>
							</li>
							<li >
								<Link to='/signup' className='mt-5' >
									<i className='fas fa-edit'></i> Signup
								</Link>
							</li>
							<li >
								<Link to='/signin' className='nav-link'>
									<i className='fas fa-sign-in-alt'></i>{' '}
									Signin
								</Link>
							</li>
						</Fragment>
					)}

					{isAuthenticated() && isAuthenticated().role === 0 && (
						<Fragment>
							<li className='nav-item'>
								<Link to='/user/dashboard' className='nav-link'>
									<i className='fas fa-home'></i> Dashboard
								</Link>
							</li>
						</Fragment>
					)}

					{isAuthenticated() && isAuthenticated().role === 1 && (
						<Fragment>
							<li className='nav-item'>
								<Link
									to='/admin/dashboard'
									className='btn btn-sm bg-light'
								>
									<i className='fas fa-home'></i> Dashboard
								</Link>
							</li>
						</Fragment>
					)}

					{isAuthenticated() && (
						<Fragment>
							<li className='nav-item'>
								<button
									className='btn btn-sm bg-light text-decoration-none pl-0'
									onClick={handleLogout}
								>
									<i className='fas fa-sign-out-alt'></i>{' '}
									Logout
								</button>
							</li>
						</Fragment>
					)}
				</ul>
			</div>
		</nav>
	);

	// render
	return <header id='header'>{showNavigation()}</header>;
};

export default withRouter(Header);
