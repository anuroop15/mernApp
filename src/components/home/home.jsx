import React from 'react'
import DashBoard from '../dashBoard'

export default class HomePage extends React.Component {
	render () {
		return (
			<div className='page-wrapper'>
				<div className="header-wrapper">
          <div className="card-title">
            <h1 className="page-text">Page Title</h1>
          </div>
				</div>
				<div className=''>
					<ul className='nav flex-column'>
						<li className='nav-item'>
							<a className='nav-item active' href="#"> Home </a>
						</li>
						<li className='nav-item'>
							<a className='nav-item' href="#"> Marriage Venue </a>
						</li>
					</ul>
				</div>
				<div className='dashboard-wrapper'>
					<DashBoard />
				</div>
			</div>
		)
	}
}