import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }

  return (
    <>
      {/* <Navbar title="TURNBULL0657" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode} />
      <About/>
      </div> */}

      <BrowserRouter>
      <Navbar className='mx-3'  title=" Turnbull Text Editor" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <Routes>

        <Route exact path = "/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>} > Home </Route>
        <Route  path = "/about" element = {<About mode = {mode}/>} > About </Route>

      </Routes>
            
      </BrowserRouter>

      
    </>
  );
}

export default App;
