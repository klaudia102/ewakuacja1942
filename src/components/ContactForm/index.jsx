import './style.css'
import React from 'react'
import emailjs from 'emailjs-com';
// import emailjs from 'emailjs/browser'

function ContactForm() {

    const SERVICE_ID = "service_n1mzixl";
    const TEMPLATE_ID = "template_wchhwdq";
    const PUBLIC_KEY = "m7ypCEczCPece-q1P";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert('Wiadomość wysłana!')
            }, (error) => {
                console.log(error.text);
                alert('Coś poszło źle, spróbuj jeszcze raz!')
            });
        e.target.reset()
    };
    return (
        <form class="formContainer form" onSubmit={handleOnSubmit}>
            <div className="mb-3 container-name">
                <label for="exampleFormControlInput1 from_name" className="form-label">imię i nazwisko</label>
                <input type="text" name="from_name" className="form-control name-input frame" id="exampleFormControlInput1 from_name" required />

            </div>
            <div className="mb-3 container-email">
                <label for="exampleFormControlInput1 from_email" className="form-label">adres e-mail</label>
                <input type="email" name="from_name" className="form-control email-input frame" id="exampleFormControlInput1 from_email" required />
            </div>
            <div class="mb-3 container-massage" >
                <label for="exampleFormControlTextarea1 message" className="form-label">wiadomość</label> <br />
                <textarea name="message" className="form-control frame" id="exampleFormControlTextarea1" required></textarea>
            </div>
            <div className='button-container'>
                <button type="button submitt" className="btn sent_button">Wyślij</button>
            </div>
        </form>
    )
}

export default ContactForm;