import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/home/home'
//import AppRoutes from './components/AppRoutes';

export default class Home extends React.Component {
	render () {
		return (
			<div>
				Hello World
			</div>
		)
	}
}

window.onload = () => {
  ReactDOM.render(<Home/>, document.getElementById('main'));
};