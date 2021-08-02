<script>
	function handleSubmit(event) {
		event.preventDefault();
		// Rather then letting method:POST do the http requests, we will do them manually
		let form = event.target;
		let url = form.action,
			xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				// response is recieved from the gscript after the email is sent
				this.setState({ ContactSending: false });
				let result = JSON.parse(xhr.response).result;
				console.log(result);
				if (result === 'success') {
					form.reset();
					this.setState({ responseResult: result });
				}
			}
		};
		// url encode form data for sending as post data
		// replaces + with the proper space code
		let encoded = [
			'name=' + form.name.value,
			'message=' + form.message.value,
			'email=' + form.email.value,
			'phone number=' + form.phone.value
		]
			.join('&')
			.replace(/%20/g, '+');
		xhr.send(encoded);

		// change the state of the form to indicate sending
		this.setState({ ContactSending: true });
	}
</script>

<div id="contact">
	<div class="section-header">
		Contact
		<p class="separator-bar" />
	</div>
	<form
		class="contact-form"
		action="https://script.google.com/macros/s/AKfycbzFfG1PsKdjJXNDzDlC6vJFVr3LITn7qOP-6iqsv_oZvS8fFMk/exec"
	>
		<span name="title" class="contact-form-title">
			<div class="title-container">
				<div
					class={'title-unsent' +
						(this.state.responseResult === 'success' ? ' title-exit-right' : '')}
				>
					Get in Touch
				</div>
				<div
					class={'title-sent' + (this.state.responseResult === 'success' ? ' title-exit-left' : '')}
				>
					Message Sent. Thank You!
				</div>
			</div>
		</span>
		<div class="line-load" />
		<div class="wrap-input row1-wrap-input">
			<input name="name" class="form-input" placeholder="Your name" />
		</div>
		<div class="wrap-input row1-wrap-input">
			<input name="email" class="form-input" type="email" placeholder="Your email" />
		</div>
		<div class="wrap-input">
			<input name="phone" class="form-input" type="tel" placeholder="Your phone number" />
		</div>
		<div class="wrap-input">
			<textarea name="message" class="form-input" placeholder="Your message here..." />
		</div>
		<div class="container-form-btn">
			<div class="wrap-form-btn">
				<button type="submit" class="form-btn">
					<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
						/>
					</svg>
					Submit
				</button>
			</div>
		</div>
	</form>
</div>

<style>
	#contact {
		width: 100%;
		min-height: 100vh;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 15px;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}

	/*-------- [ Form ]*/
	.contact-form {
		max-width: 960px;
		background: #fff;
		border-radius: 5px;
		padding: 66px 115px 59px 115px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	/*------ [ Form Title ]*/
	.contact-form-title {
		display: block;
		width: 100%;
		font-size: 30px;
		color: #333333;
		line-height: 1.2;
		text-transform: uppercase;
		text-align: left;
		padding-bottom: 32px;
		overflow: hidden;
	}
	.title-container {
		font-size: 2rem;
		position: relative;
		padding-bottom: 10px;
	}

	/* formatting for unsent message */
	.title-unsent {
		position: absolute;
	}
	.title-exit-right {
		animation: slide-out-right 0.5s ease forwards;
	}
	@keyframes slide-out-right {
		0% {
			left: 0;
		}
		100% {
			left: 100%;
		}
	}
	/* formatting for sent message */
	.title-sent {
		position: absolute;
		left: -100%;
	}
	.title-exit-left {
		animation: slide-in-right 0.5s ease forwards;
	}
	@keyframes slide-in-right {
		0% {
			left: -100%;
		}
		100% {
			left: 0;
		}
	}

	/*------- [ Input Boxes ]*/

	.wrap-input {
		width: 100%;
		position: relative;
		background-color: transparent;
		margin-bottom: 35px;
	}

	.row1-wrap-input {
		width: calc((100% - 30px) / 2);
	}

	.form-input {
		display: block;
		width: 100%;
		background: #f2f2f2;
		border-radius: 20px;
		border: none;
		resize: none;

		font-size: 20px;
		line-height: 1.2;
		padding: 0 28px;

		-webkit-transition: all 0.4s;
		-o-transition: all 0.4s;
		-moz-transition: all 0.4s;
		transition: all 0.4s;

		margin-top: 10px;
	}
	.form-input:hover {
		background: #e0e0e0;
	}
	.form-input:focus {
		background: #d0d0d0;
	}

	input.form-input {
		height: 62px;
		outline: none;
	}
	textarea.form-input {
		min-height: 162px;
		padding-top: 19px;
		padding-bottom: 13px;
		outline: none;
	}

	/*------- [ Form Button ]*/
	.container-form-btn {
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 5px;
	}

	.wrap-form-btn {
		display: block;
		position: relative;
		z-index: 1;
		border-radius: 2px;
	}

	.form-btn {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		padding: 0 20px;
		min-width: 150px;
		height: 62px;
		box-shadow: 0 5px #888;

		border: none;
		outline: none;

		font-size: 16px;
		color: black;
		line-height: 1.2;
		text-transform: uppercase;
		cursor: pointer;
		transition: transform 0.1s, box-shadow 0.1s, background-color 0.4s;
	}
	.form-btn:hover {
		background-color: #616161;
		color: white;
	}
	.form-btn:active {
		box-shadow: 0 1px #666;
		transform: translateY(4px);
	}
	.btn-icon {
		fill: black;
		height: 20%;
		padding-right: 10px;
	}

	/* loading animation */
	.line-load {
		height: 5px;
		width: 100%;
		overflow: hidden;
	}
	.line-load .bar {
		position: relative;
		height: 5px;
		width: 100%;
		background-color: dodgerblue;
		animation-name: bouncing-load;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}
	@keyframes bouncing-load {
		0% {
			left: -100%;
		}
		49% {
			left: 100%;
		}
		50% {
			left: 100%;
		}
		100% {
			left: -100%;
		}
	}
</style>
