/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
	return (
		<header className='header-area header-sticky'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<nav className='main-nav'>
							<a href='index.html' className='logo'>
								Lava
							</a>
							<ul className='nav'>
								<li className='scroll-to-section'>
									<a href='#welcome' className='menu-item'>
										Home
									</a>
								</li>
								<li className='scroll-to-section'>
									<a href='#about' className='menu-item'>
										About
									</a>
								</li>
								<li className='scroll-to-section'>
									<a
										href='#testimonials'
										className='menu-item'>
										Testimonials
									</a>
								</li>
								<li className='submenu'>
									<a href=''>Drop Down</a>
									<ul>
										<li>
											<a href='#' className='menu-item'>
												About Us
											</a>
										</li>
										<li>
											<a href='#' className='menu-item'>
												Features
											</a>
										</li>
										<li>
											<a href='#' className='menu-item'>
												FAQ's
											</a>
										</li>
										<li>
											<a href='#' className='menu-item'>
												Blog
											</a>
										</li>
									</ul>
								</li>
								<li className='scroll-to-section'>
									<a href='#contact-us' className='menu-item'>
										Contact Us
									</a>
								</li>
							</ul>
							<a className='menu-trigger'>
								<span>Menu</span>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
