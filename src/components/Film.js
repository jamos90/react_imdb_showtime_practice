import React from 'react';

const Film = function (props) {
  return(
  <li>
    <div className="film-title">
    <img src = "../../public/add.png" alt='add logo'/>
    <a href = {props.film}> {props.name} </a>
  </div>
    <div className="show-times">
    <a  href = {props.time}>show times</a>
  </div>
  </li>
  )
}

export default Film;
