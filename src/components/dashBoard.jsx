import React from 'react'


export default class DashBoard extends React.Component {
	render () {
		return (
			<div className=''>
				<div>
					<ul className='nav flex-column'>
						<li className='nav-item'><a className='nav-item active' href="#"> Home </a></li>
						<li className='nav-item'><a className='nav-item' href="#"> Marriage Venue </a></li>
					</ul>
				</div>
			</div>
		)
	}
}