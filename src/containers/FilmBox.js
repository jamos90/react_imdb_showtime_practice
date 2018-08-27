import React from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {
          name: 'Chirstopher Robin',
          title: 'https://www.imdb.com/title/tt4575576?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t0',
          time: 'https://www.imdb.com/showtimes/title/tt4575576?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs',
          id: 123
        },

        {
          name: '	Mamma Mia! Here We Go Again',
          title: 'https://www.imdb.com/title/tt6911608?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t1',
          time: 'https://www.imdb.com/showtimes/title/tt6911608?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs',
          id:456
        },
        {
          name: 'The Meg',
          title:'https://www.imdb.com/title/tt4779682?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t2',
          time: 'https://www.imdb.com/showtimes/title/tt4779682?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=d120b30e-f0de-4d19-a67b-80c0ca1f8c6e&pf_rd_r=A61WHBN8CCMNWES6PS8G&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'
        }
      ]
    }
  }
  render(){
    return (

      <div className = "film-box">
        UK Opening this week:
        <FilmList films={this.state.films}/>

        <a href = 'https://www.imdb.com/showtimes/'> see more show times</a>

       <button> Get more show times </button>
     </div>
    );
  }
}

export default FilmBox;
