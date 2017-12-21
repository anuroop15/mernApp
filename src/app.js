import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './components/dashBoard'
//import AppRoutes from './components/AppRoutes';

export default class Home extends React.Component {
	render () {
		return (
			<div>
				<DashBoard />
			</div>
		)
	}
}

window.onload = () => {
  ReactDOM.render(<Home/>, document.getElementById('main'));
};