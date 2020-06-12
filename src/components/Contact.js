import React from 'react';
import Fade from 'react-reveal/Fade';
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      responseResult: '',
      ContactSending: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Rather then letting method:POST do the http requests, we will do them manually
    let form = event.target;
    let url = form.action,
        xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // response is recieved from the gscript after the email is sent
        this.setState({ContactSending: false});
        let result = JSON.parse(xhr.response).result;
        console.log(result);
        if (result === 'success'){
          form.reset();
          this.setState({ responseResult: result });
        }
      }
    };
    // url encode form data for sending as post data
    // replaces + with the proper space code
    let encoded = [
      'name='+form.name.value,
      'message='+form.message.value,
      'email='+form.email.value,
      'phone number='+form.phone.value
    ].join('&').replace(/%20/g, '+');
    xhr.send(encoded);

    // change the state of the form to indicate sending
    this.setState({ContactSending: true});
  }

  render() {
    return (
      <div id="contact">
        <Fade bottom>
          <div className="section-header">
            Contact
            <p className="separator-bar"></p>
          </div>
        </Fade>
        <Fade left>
          <form className="contact-form" onSubmit={this.handleSubmit} action="https://script.google.com/macros/s/AKfycbzFfG1PsKdjJXNDzDlC6vJFVr3LITn7qOP-6iqsv_oZvS8fFMk/exec">
            <span name="title" className="contact-form-title">
              <div className="title-container">
                <div className={"title-unsent"+(this.state.responseResult === 'success' ? " title-exit-right" : "")}>Get in Touch</div>
                <div className={"title-sent"+(this.state.responseResult === 'success' ?  " title-exit-left" : "")}>Message Sent. Thank You!</div> 
              </div>
            </span>
            <div className="line-load">{this.state.ContactSending ? <div className="bar"></div> : ''}</div>
            <div className="wrap-input row1-wrap-input">
              <input name="name" className="form-input" placeholder="Your name"/>
            </div>
            <div className="wrap-input row1-wrap-input">
              <input name="email" className="form-input" type="email" placeholder="Your email"/>
            </div>
            <div className="wrap-input">
              <input name="phone" className="form-input" type="tel" placeholder="Your phone number"/>
            </div>
            <div className="wrap-input">
              <textarea name="message" className="form-input" placeholder="Your message here..."/>
            </div>
            <div className="container-form-btn">
              <div className="wrap-form-btn">
                <button type="submit" className="form-btn">
                  {/* paper plane svg from fontawesome */}
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                  </svg>Submit
                </button>
              </div>
            </div>
          </form>  
        </Fade>
        
      </div>
    )
  }
}

export default Contact;