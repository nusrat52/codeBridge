import React, {useEffect} from 'react';
import './App.css';
import Main from "./components/main"
import "./styles/style.scss"
import { boundRequestData } from "./store/todo/TodoAction"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import Detailed from "./components/Detailed"
 function App() {

const dispatch = useDispatch()

  useEffect(() => {
    boundRequestData()(dispatch)
  },[])
  return (


    
    <Router>
      <Routes>
<Route element={<Main/>} path="/"/>
     
 


<Route element={<Detailed  />} path="/detailed"/>
  
 </Routes>
</Router>
  );
}

export default App;
