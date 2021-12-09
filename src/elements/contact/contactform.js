import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ContactForm = ({url}) => {
    const { register, handleSubmit, errors } = useForm({
		mode: "onBlur"
	})
    const [serverState, setServerState] = useState({
		submitting: false,
		status: null
    });

	const [value, setValue] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
    });

    const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
			setValue({
				name: '',
				email: '',
				subject: '',
				message: ''
			})
		}
    };

    function encode(data) {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
    }

    const onSubmit = (data, event) => {
  		const form = event.target;
  		setServerState({ submitting: true });
      event.preventDefault()
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": event.target.getAttribute("name"),
          ...event.target
        })
      }).then(() => handleServerResponse(true, "Thanks! We'll be in touch!", form)).catch(error => alert(error))
  		// axios({
  		// 	method: "post",
  		// 	url: url,
  		// 	data
  		// })
  		// 	.then(res => {
  		// 		handleServerResponse(true, "Thanks! for being with us", form);
  		// 	})
  		// 	.catch(err => {
  		// 		handleServerResponse(false, err.response.data.error, form);
  		// 	});
  	}

    const isErrors = Object.keys(errors).length !== 0 && true;
    	const onChangeHandler = e => {
    		setValue({ ...value, [e.target.name]: e.target.value })
	  }

    return (
        <form data-netlify="true" name="contactForm" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className={`form-group ${(isErrors && errors.name) ? 'has-error' : ''} ${value.name ? 'has-value' : ''}`}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Full Name Required',
                    })}
                />
                <label htmlFor="name">Full Name</label>
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.email) ? 'has-error' : ''} ${value.email ? 'has-value' : ''}`}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Email Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                <label htmlFor="email">Enter Your Email</label>
                {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.subject) ? 'has-error' : ''} ${value.subject ? 'has-value' : ''}`}>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Subject Required',
                    })}
                />
                <label htmlFor="subject">Subject</label>
                {errors.subject && <span className="error">{errors.subject.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.message) ? 'has-error' : ''} ${value.message ? 'has-value' : ''}`}>
                <textarea
                    name="message"
                    id="message"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Message Required',
                        minLength: { value: 10, message: "Minimum length is 10" }
                    })}
                >
                </textarea>
                <label htmlFor="message">Write your message here.</label>
                {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <div className="form-submit">
                <input type="hidden" name="form-name" value="contactForm" />
                <button className="rn-button" type="submit" disabled={serverState.submitting}>
                    Send Message
                </button>
                {serverState.status && (
                    <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                        {serverState.status.msg}
                    </p>
                )}
            </div>
        </form>
    )
}

export default ContactForm;
