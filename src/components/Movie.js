import React from "react";
import propTypes from "prop-types";
import StarRatings from 'react-star-ratings';
import "./Movie.css"
import {Link} from "react-router-dom";

function Movie({id,title,year,summary,poster,genres,rating}) {
 return(
   <Link to = {{
    pathname : "/movie/"+id,
    state : {id,title,year,rating,summary,poster,genres}
   }}>
    <div class = "movie">
      <img src = {poster} alt={poster} title={title}/> 
      <div class = "movie_data">
        <div class = "title">
          {title}
        </div>
        <div class = "grid">
          <div class = "rating">
            <StarRatings rating={rating/2} starRatedColor="Red" starDimension="25px" starSpacing="15px"/>
            <div class = "rates">{rating/2}</div>
          </div>
          <div class="genres">
            <li> {genres[0]} </li>
            <li> {genres[1]} </li>
          </div>
        </div>
        <p class = "summary">{summary.slice(0,300)}...</p>
      </div>
    </div>
  </Link>
 )
}

Movie.propTypes = {
  id : propTypes.number.isRequired,
  year : propTypes.number.isRequired,
  title : propTypes.string.isRequired,
  poster : propTypes.string.isRequired,
  summary : propTypes.string.isRequired,
  genres : propTypes.arrayOf(propTypes.string).isRequired,
  rating : propTypes.number.isRequired
}

export default Movie;