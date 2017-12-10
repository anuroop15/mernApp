import React from 'react';
import ReactDOM from 'react-dom';

//import AppRoutes from './components/AppRoutes';

export default class HelloWord extends React.Component {
	render () {
		return (
			<div>
				Hello Anuroop
			</div>
		)
	}
}

window.onload = () => {
  ReactDOM.render(<HelloWord/>, document.getElementById('main'));
};