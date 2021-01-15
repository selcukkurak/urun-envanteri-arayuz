
import React from 'react';
import logo from './images/tuik-logo.svg';
import {Alignment, Button, Navbar} from "@blueprintjs/core";



export default function HeaderBar() {

  return (
    <div style={{flexGrow: 1, top:0, left:0}}>
      <Navbar fixedToTop style={{backgroundColor:"black"}}>
        <Navbar.Group align={Alignment.LEFT}>
            <img src={logo} width="40px" alt="banner" />
            <Navbar.Divider/>
          <Navbar.Heading style={{color:"white"}}>İstatistiki Ürün Envanteri</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}