import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Gif ({ title, id, url }) {
  return (
    <Card bg="transparent">
      <Card.Header>{title}</Card.Header>
      <Card.Img variant="top" src={url} alt={title} className="h-50 w-50 mx-auto"/>
      <Card.Body>
        <Button variant='outlined' startIcon={<AddShoppingCartIcon />}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  )
}
