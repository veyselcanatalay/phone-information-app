import React, { Component } from 'react'; 
import { Navbar, Nav, Container} from 'react-bootstrap';
import {useState} from "react";
import { useAppDispatch, useAppSelector } from './store';
import { addPhones } from './features/phones/phonesSlice';
import { addSales } from './features/sale/salesSlice';

import './App.css'
const axios = require('axios').default;
function App() {
  const phones = useAppSelector(state => state.phones); 
  const [title , setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onLoadPhones = async () => {
    await axios.get('http://localhost:3000/phones').then((res:any)=> {
    res.data.forEach((item:any)=>{
    console.log(item)
      dispatch(addPhones(item))})
    })  
  };

  const onLoadSales = async () => {
    await axios.get('http://localhost:3000/sales').then((res:any)=> {
    res.data.forEach((item:any)=>{
      dispatch(addSales(item))})
    })  
  };
  return (
    <div className="App">
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Nacsoft</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="List">List</Nav.Link>
            <Nav.Link href="Graphics">Graphics</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <button className="load-phones" onClick={()=>onLoadPhones()}> Load Phones </button>
      <button className="load-sales" onClick={()=>onLoadSales()}> Load Sales </button>
    </div>
  );
}

export default App;
