import React from 'react';
import Film from './Film.js';

class FilmList extends React.Component {
  render() {
    const filmComponents = this.props.films.map((film) =>{
    return  <Film film ={film.title} time={film.time} name={film.name} key={film.id}/>
    });
    return (
      <ul>
      Film Details {filmComponents}
      </ul>
    );
  }
}

export default FilmList
