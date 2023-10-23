import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Series from "./pages/Series";
import Peliculas from "./pages/Peliculas";
import Login from "./pages/Login";
import Buscar from "./pages/Buscar";

function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/peliculas' element={<Peliculas/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/buscar' element={<Buscar/>}/>
          <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
