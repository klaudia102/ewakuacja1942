import './style.css'
import ContacForm from '..//../components/ContactForm/index'
import MainHeader from '../../mainHeader'

function Contact() {

  return (
    <>
    < MainHeader />
      <div className='main_container_contact'>

        <section className='text'>
          <div className='text-container'>
            <h3>Jeśli potrzebujesz się z nami skontaktować,</h3>
          </div>
          <div className='text-container'><h3>wyślij e-mail na adres <e-mail>ewakuowani1942@gmail.com</e-mail></h3></div>
          <div className='text-container'><h3>lub wypełnij formularz </h3></div>
        </section>

        <ContacForm />

      </div>
    </>
  )
}

export default Contact