import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagPoke from './pages/pag-poke-ignore';
import PokemonDetails from './pages/details';
import PokemonListController from './pages/pokemon-list/controller/pokemon-list-controller';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<PokemonListController/>}/>
    <Route path='/pokemon-details'element={<PokemonDetails/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//27-02-2023