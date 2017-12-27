import React from 'react'
import DashBoard from '../dashBoard'
import AppRoutes from '../appRoutes'

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
							<a className='nav-item active' href="#welcome"> Welcome </a>
						</li>
						<li className='nav-item'>
							<a className='nav-item' href="#invitation"> Invitation </a>
						</li>
            <li className='nav-item'>
              <a className='nav-item' href="#photos"> Photos </a>
            </li>
            <li className='nav-item'>
              <a className='nav-item' href="#events"> Events </a>
            </li>
            <li className='nav-item'>
              <a className='nav-item' href="#guestbook"> Guestbook </a>
            </li>
            <li className='nav-item'>
              <a className='nav-item' href="#contact"> Contact us </a>
            </li>
					</ul>
				</div>
				<div className='dashboard-wrapper'>
					<AppRoutes />
				</div>
			</div>
		)
	}
}