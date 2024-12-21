import './style.css'
import Jumbotron from '../../components/Jumbotron'
import MainHeader from '../../mainHeader'


function Home() {

  return (
    <>
   < Jumbotron /> 
   < MainHeader />
       <div>
      <p> W  marcu i sierpniu 1942 r. 70 tys. polskich żołnierzy Polskich Sił Zbrojnych w ZSRR zostało ewakuowanych do Iranu.</p>
      <p>Strona ewakuowani1942.pl ma na celu ułatwienie badań nad historią zaróno jednostek wojskowych, jak i pojedyńczych żołnierzy</p>
      <p>Prace są bardzo czasochłonne - niestety nie dysponujemy pełnymi listami przewozowymi.</p>
      <p>Systematycznie jednak na stronie będa pojawiać się nowe jednostki, nowe nazwiska, wiec proszę o cierpliwość - prace wykonywane są wolontaryjnie.</p>
      </div>
    </>
  )
}

export default Home