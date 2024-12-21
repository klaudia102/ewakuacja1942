import './style.css'
import Findings from '../../components/Findings'
import MainHeader from '../../mainHeader'

function Search() {

  return (
    <>
      < MainHeader />
      <div className='search_container'>
        <input type="text"  className="form-control search-input" id="exampleFormControlInput1" />
          <button type="button submitt" className="btn search_button">Wyślij</button>
      </div>
      <Findings />
    </>
  )
}

export default Search