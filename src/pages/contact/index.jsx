import './style.css'

function Contact() {

  return (
    <>
      <div className='main-container'>
        <section className='text'>
          <div className='text-container'>
            <h3>Jeśli potrzebujesz się z nami skontaktować,</h3>
          </div>
          <div className='text-container'><h3>wyślij e-mail na adres <e-mail>ewakuowani1942@gmail.com</e-mail>
            lub wypełnij formularz </h3></div>
        </section>

        <section className='form'>
          <div className="mb-3 container-email">
            <label for="exampleFormControlInput1" className="form-label">adres e-mail</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3 ontainer-massage" >
            <label for="exampleFormControlTextarea1" classname="form-label">wiadomość</label> <br/>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact