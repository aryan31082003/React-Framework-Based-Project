import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/textform';
import About from './components/About';
import React ,{ useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  //only one element is returned at upper most level (see below). Everything in return block is JSX( 98% HTML and 2% Javascript)
  const[mode,setmode]=useState('light')
  function changemode(){
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0d1b2a'
      showalert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled","success")
    }
  }
  const [alert , setalert]=useState(null);
  function showalert(message , type){
    setalert({ 
      msg:message ,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" Home="HOME" mode={mode} changemode={changemode}/>
      <Alert data={alert}/>
      <div className={`container text-${mode==='light'?'dark':'light'}`} >
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<Textform mode={mode} heading="Enter the text to Analyze" data={alert} showalert={showalert}/>}/>
        </Routes>
      </div>
      </Router>
      </>
  );
}

export default App;
