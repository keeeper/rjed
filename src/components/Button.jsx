import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {nextJoke} from '../store/mainReducer';

const Button = ({name}) => {
  const isLoading  = useSelector(state => state.main.isLoading);
  const dispatch = useDispatch();
  return(
    <button className={`button-cta ${isLoading ? 'is-disabled' : ''}  `} type="button" onClick={()=>dispatch(nextJoke())}>
      <span className="button-cta__name">{name}</span>
      <span className="button-cta__loader"></span>
    </button>
  )
}

export default Button;