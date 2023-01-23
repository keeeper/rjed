import React from 'react';
import { useDispatch } from 'react-redux';
import {nextJoke} from '../store/mainReducer';

const Button = ({name}) => {
  const dispatch = useDispatch();
  return(
    <button type="button" onClick={()=>dispatch(nextJoke())}>{name}</button>
  )
}

export default Button;