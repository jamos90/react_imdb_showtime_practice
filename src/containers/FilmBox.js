import React from 'react';

class FilmBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {
          film: 'Isle of Dogs',
          time: '20:00'
        },

        {
          film: 'The Grand Budapest Hotel',
          time: '18:00'
        }
      ]
    }
  }
  render(){
    return (

      <div className = "film-box">
        <FilmList films={this.state.films}/>

     </div>
    );
  }
}

export default FilmBox;
