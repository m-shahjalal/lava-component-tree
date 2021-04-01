import Form from './Form';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
	return (
		<footer id='contact-us'>
			<div class='container'>
				<div class='footer-content'>
					<div class='row'>
						<div class='col-lg-6 col-md-12 col-sm-12'>
							<Form />
						</div>
						<div class='right-content col-lg-6 col-md-12 col-sm-12'>
							<h2>
								More About <em>Lava</em>
							</h2>
							<p>
								Phasellus dapibus urna vel lacus accumsan,
								iaculis eleifend leo auctor. Duis at finibus
								odio. Vivamus ut pharetra arcu, in porta metus.
								Suspendisse blandit pulvinar ligula ut
								elementum.
								<br />
								<br />
								If you need this contact form to send email to
								your inbox, you may follow our
								<a
									rel='nofollow'
									href='https://templatemo.com/contact'
									target='_parent'>
									contact
								</a>
								page for more detail.
							</p>
							<ul class='social'>
								<li>
									<a href='https://fb.com/templatemo'>
										<i class='fa fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class='fa fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class='fa fa-linkedin'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class='fa fa-rss'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class='fa fa-dribbble'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col-lg-12'>
						<div class='sub-footer'>
							<p>
								Copyright &copy; 2020 Lava Landing Page |
								Designed by{' '}
								<a rel='nofollow' href='https://templatemo.com'>
									TemplateMo
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
