import './style.css'
import React from 'react';

function Findings(props) {
  return (
    <>
      <section className='card_container'>
        <div className='card'>
          <table>
            <tr>
              <th>imię i nazwisko:</th>
              <th>{props.imie} {props.nazwisko}</th>
            </tr>
            <tr>
              <td>data urodzenia:</td>
              <td>{props.urodzony}</td>
            </tr>
            <tr>
              <td>miejsce urodzenia:</td>
              <td>{props.miejsceUr}</td>
            </tr>
            <tr>
              <td>stopień wojskowy:</td>
              <td>{props.stopień}</td>
            </tr>
            <tr>
              <td>przydział w ZSRR:</td>
              <td>{props.przydział}</td>
            </tr>
            <tr>
              <td>data ewakuacji:</td>
              <td>{props.data}</td>
            </tr>
            <tr>
              <td>przydział na Środkowym Wschodzie:</td>
              <td>{props.nowyPrzydział}</td>
            </tr>
            {/* <tr>
              <td>sygnatury archiwalne:</td>
              <td>{props.sygnatura}</td>
            </tr> */}
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
          </div>
      </section>
    </>
  )
}

export default Findings