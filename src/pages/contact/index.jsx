import './style.css'

function Contact() {

  return (
    <>
      <div className='main-container'>

        <section className='text'>
          <div className='text-container'>
            <h3>Jeśli potrzebujesz się z nami skontaktować,</h3>
          </div>
          <div className='text-container'><h3>wyślij e-mail na adres <e-mail>ewakuowani1942@gmail.com</e-mail></h3></div>
          <div className='text-container'><h3>lub wypełnij formularz </h3></div>
        </section>

        <section className='form'>
          <div className="mb-3 container-email">
            <label for="exampleFormControlInput1" className="form-label">adres e-mail</label>
            <input type="email" className="form-control email-input" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="mb-3 container-massage" >
            <label for="exampleFormControlTextarea1" className="form-label">wiadomość</label> <br />
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className='button-container'>
          <button type="button" className="btn sent_button">Wyślij</button>
          </div>
        </section>

      </div>
    </>
  )
}

export default Contact