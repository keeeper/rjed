import React from 'react';
import { useSelector } from 'react-redux';


const Button = ({buttonName, clickHandler}) => {
  const isLoading  = useSelector(state => state.main.isLoading);
 
  return(
    <button className={`button-cta ${isLoading ? 'is-disabled' : ''}`} type="button" onClick={clickHandler}>
      <span className="button-cta__name">{buttonName}</span>
      <span className="button-cta__loader"></span>
    </button>
  )
}

export default Button;