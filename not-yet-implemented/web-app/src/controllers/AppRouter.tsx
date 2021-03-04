import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { IViewProps } from '../global/Interfaces';
import Contact from '../pages/Contact';
import { Settings } from '../pages/Settings';
import User from '../pages/User';
import NotFound from '../pages/NotFound';


const AppRouter = (props: IViewProps) => {
	return (
		<Switch>
			<Route path='/' exact component={() => <Home {...props} />} />
			<Route path='/user' component={() => <User {...props} />} />
			<Route path='/contact' component={() => <Contact {...props} />} />
			<Route path='/settings' component={() => <Settings {...props} />} />
			<Route path='/settings' component={() => <Settings {...props} />} />
			<Route path='/settings' component={() => <Settings {...props} />} />
			<Route path="/on-sign-in" component={() => { props.history.goBack(); return null }} />
			{/* <Route path="/on-sign-in" component={() => { props.history.goBack(); return null }} /> */}
			<Route path="/terms-of-service" component={() => <div>we own you</div>} />
			<Route path="/privacy-policy" component={() => <div>we sell it</div>} />
			<Route component={() => <NotFound {...props} />} />
		</Switch>
	)
}

export default AppRouter