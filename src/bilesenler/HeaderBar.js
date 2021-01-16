import React from 'react';
import logo from './images/tuik-logo.svg';
import {Alignment, Navbar} from "@blueprintjs/core";
import { ArayuzRenkleri } from '@tuik/renkler'

export default function HeaderBar() {
  return (
    <Navbar fixedToTop style={{ backgroundColor: ArayuzRenkleri.ustMenu }}>
      <Navbar.Group align={Alignment.LEFT}>
        <img src={logo} width="40px" alt="banner" />
        <Navbar.Divider/>
        <Navbar.Heading style={{ color:"white" }}>İstatistiki Ürün Envanteri</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
}