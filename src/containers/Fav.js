import React from 'react';
import { connect } from 'react-redux';
import clickedFav from '../actions/clickedFav';

const Fav = ({ dispatch, isFavorite, name }) => {
  let path = isFavorite ? 'star_green.png' : 'star_yellow.png';

  const handleClick = (event) => {
    dispatch(clickedFav(name));
  }

  return(
    <div className="fav" onClick={handleClick}><img src={path} alt=""/></div>
  );
}


export default connect()(Fav);
