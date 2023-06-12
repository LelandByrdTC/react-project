import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
    this.controller = new AbortController();
  }

  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films", { signal: this.controller.signal })
      .then((response) => response.json())
      .then((films) =>{ 
        console.log(films) //for the abort controller?
        this.setState({ list: films })
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getFilms();
  }

//   componentWillUnmount() {
//     this.controller.abort();
//   }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;