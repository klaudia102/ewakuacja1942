import './style.css'
import React from 'react';

function Findings(props) {
  return (
    <>
<section className='card_container'> 
 <div className='card'> 
      <h4 className="card_title">imię i nazwisko: {props.imie} {props.nazwisko}</h4>
      <p>data urodzenia: {props.urodzony}</p>
      <p>miejsce urodzenia: {props.miejsceUr}</p>
      <p>stopień wojskowy: {props.stopień}</p>
      <p>przydział w ZSRR: {props.stopień}</p>
      <p>data ewakuacji: {props.data}</p>
      <p>przydział na Środkowym Wschodzie: {props.nowyPrzydział}</p>
      <p>sygnatury archiwalne: {props.sygnatura}</p>
      </div>
</section>
    </>
  )
}

export default Findings