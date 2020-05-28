import React from 'react';
import { connect } from 'react-redux';
import clickedBase from '../actions/clickedBase';

const Base = ({ dispatch, isBase, name }) => {
  let className = isBase ? 'base-active' : 'base-disable';

  const handleClick = (event) => {
    console.log(name);
    dispatch(clickedBase(name));
  }

  return (
    <div className={className} onClick={handleClick}><img src='base.png' alt=""/></div>
  );
}

export default connect()(Base);
