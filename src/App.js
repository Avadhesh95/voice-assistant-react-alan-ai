import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import Main from './Main'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.btnInstance = alanBtn({
        key: 'bedf68e18d315de5b55701b5cd6d578b2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          console.log('here', commandData.url);
          navigate(commandData.url);
        },
      });
    }
  }, []);

  return (
    <div className="App">
       <Main />
    </div>
  );
}

export default App;
