import React from 'react';

const Film = function (props) {
  return(
  <li>
    <a href = {props.film}> {props.name} </a>
    <a className="show-times" href = {props.time}>show times</a>
  </li>
  )
}

export default Film;
