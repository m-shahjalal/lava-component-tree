const Form = () => {
	return (
		<div className='contact-form'>
			<form id='contact' action='' method='post'>
				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<fieldset>
							<input
								name='name'
								type='text'
								id='name'
								placeholder='Full Name'
								required=''
								style={{
									background: ' rgba(250,250,250,0.3)',
								}}
							/>
						</fieldset>
					</div>
					<div className='col-md-6 col-sm-12'>
						<fieldset>
							<input
								name='email'
								type='text'
								id='email'
								placeholder='E-Mail Address'
								required=''
								style={{
									background: ' rgba(250,250,250,0.3)',
								}}
							/>
						</fieldset>
					</div>
					<div className='col-lg-12'>
						<fieldset>
							<textarea
								name='message'
								rows='6'
								id='message'
								placeholder='Your Message'
								required=''
								style={{
									background: ' rgba(250,250,250,0.3)',
								}}>
								{' '}
							</textarea>
						</fieldset>
					</div>
					<div className='col-lg-12'>
						<fieldset>
							<button
								type='submit'
								id='form-submit'
								className='main-button'>
								Send Message Now
							</button>
						</fieldset>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
