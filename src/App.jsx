import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const App = () => (
  <>
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#">PokemonApp</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/pokemones" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Pokemones
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <Outlet />
    </Container>
  </>
);

export default App;
