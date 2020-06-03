import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";


class Home extends React.Component {
  
  state = {
    isLoading : true,
    movies : []
  }
  getMovie = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false});
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const {isLoading, movies} = this.state;
    return(
      <section class = "container">
      {isLoading ? (
       <div>
         Loading...
       </div>
       )
       : (
       movies.map(movie => (
        
        <Movie
        id = {movie.id}
        title = {movie.title}
        year = {movie.year}
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        rating = {movie.rating}/>
        
      ))
        )
      }
      </section>
    );
  }
    
}

export default Home;