import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      headerStyle: {color: "red"},
      movieData: []
    }
  }
  
  componentDidMount() {
    const myKey = `${process.env.REACT_APP_MOVIE_API_KEY};`
    console.log(myKey)
    fetch(" https://movie-database-imdb-alternative.p.rapidapi.com/")
      .then(response => response.json())
      .then(response => {
        const {movies} = response.data
        this.setState({
          movieData: movies
        })
      })
  }
  

  render() {
    return (
      <div className="App">
        <h1 style={this.state.headerStyle}>Movie Data</h1>
      </div>
    );
  }
}

export default App;
