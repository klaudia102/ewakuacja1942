import './style.css'
import Findings from '../../components/Findings'

function Search() {

  return (
    <>
      <h1>Ewakuowani 1942</h1>
      <h2>lista ewakowanych z ZSRR w 1942</h2>
      <div className='search_container'>
        <input type="text"  className="form-control search-input" id="exampleFormControlInput1" />
          <button type="button submitt" className="btn search_button">Wyślij</button>
      </div>
      <Findings />
    </>
  )
}

export default Search