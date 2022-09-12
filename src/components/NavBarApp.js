import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Outlet, Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function NavBarApp () {
  return (
    <>
    <Navbar bg='dark' expand='lg' fixed="top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Servidores y servicios WEB</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link  as={Link} to='/about'>Quienes Somos</Nav.Link>
            <Nav.Link  as={Link} to='/contact_us'>Contactanos</Nav.Link>
            <Nav.Link  as={Link} to='/market'>Productos</Nav.Link>
            <Nav.Link  as={Link} to='/market'><Button startIcon={<AddShoppingCartIcon />}></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className="App-content">
        <Outlet></Outlet>
    </section>
    </>

  )
}

export default NavBarApp
