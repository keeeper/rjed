import React from 'react';

const Button = ({buttonName, buttonAltName, clickHandler, isLoading }) => {
  return(
    <button className={`button-cta ${isLoading ? 'is-loading' : ''}`} type="button" onClick={clickHandler}>
      <span className="button-cta__name">{buttonName}</span>
      <span className="button-cta__name button-cta__name--alt">{buttonAltName}</span>
    </button>
  )
}

export default Button;
