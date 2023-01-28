import React from 'react';
import htmlParse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoading } from '../store/mainReducer';

export default function Joke({ text }) {
  const dispatch = useDispatch();

  function useTextWithBreaks(text) {
    const [formattedText, setFormattedText] = useState(text);
    
  
    useEffect(() => {
      const newText = text.replace(/<br>/g, "<br/>");
      setFormattedText(newText);
    }, [text]);
  
    return formattedText;
  }
  
  function useTextReveal(text, delay = 20) {
    const [revealedText, setRevealedText] = useState("");
      
    useEffect(() => {
      let index = 0;
      setRevealedText("");
      dispatch(toggleLoading());
      const textArray = text.split("");
      const interval = setInterval(() => {
        setRevealedText(prevText => prevText + textArray[index]);
        index++;
        if (index === textArray.length) {
          clearInterval(interval);
          dispatch(toggleLoading());
        }
      }, delay);
      //clear the previous interval when the text changes
      return () => clearInterval(interval);
    }, [text, delay]);
      
    return revealedText;
  }
  const formattedText = useTextWithBreaks(text);
  const revealedText = useTextReveal(formattedText);

  return <div className="joke-text">{htmlParse(revealedText)}</div>;
}