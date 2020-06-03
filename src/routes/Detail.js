import React from "react";
import StarRatings from 'react-star-ratings';
import "./Detail.css"

class Detail extends React.Component{
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined)
      {
        history.push("/");
      }
  }
  render() {
    const movie = this.props.location;
    console.log(movie.state);
    return (
      <div class = "details">
        <div class = "detail_title">
          {movie.state.title}
        </div>
        <div class = "poster">
          <img src = {movie.state.poster} alt={movie.state.poster} title={movie.state.title}/> 
        </div>  
        <StarRatings rating={movie.state.rating/2} starRatedColor="Red" starDimension="25px" starSpacing="15px"/>
        <div class = "rates">{movie.state.rating/2}</div>
        <p class = "summary">{movie.state.summary}</p>
      </div>
    );
  }
}

export default Detail;