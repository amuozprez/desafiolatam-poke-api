import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Pokemones from './components/Pokemones';
import PokemonDetail from './components/PokemonDetail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pokemones" element={<Pokemones />} />
          <Route path="pokemones/:name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);