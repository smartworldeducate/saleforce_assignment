import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from '../components2/Navbar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Bloge from '../components2/Bloge'
import BlogeDetail from '../components2/BlogeDetail'
import Shope from '../pages/Shope';
import Footer from '../components2/Footer'
import Cart from './Cart';
import Product from './Product';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
			<Navbar/>
				<Switch>
					<Route exact path='/Contact' component={Contact}/>
					<Route exact path='/Bloge' component={Bloge}/>
					<Route exact path='/' component={Home} />
					<Route exact path='/Shope' component={Shope} />
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/BlogeDetail' component={BlogeDetail} />
					<Route
						exact
						path='/product/:productId'
						component={Product}
					/>
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					<UserRoute
						exact
						path='/user/dashboard'
						component={UserDashboard}
					/>
					<AdminRoute
						exact
						path='/admin/dashboard'
						component={AdminDashboard}
					/>
					<AdminRoute
						exact
						path='/admin/edit/product/:productId'
						component={AdminEditProduct}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
			<Footer/>
		</BrowserRouter>
	);
};

export default App;
