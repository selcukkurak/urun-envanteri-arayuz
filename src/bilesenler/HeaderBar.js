import React from 'react';
import { Alignment, Classes, Navbar } from '@blueprintjs/core'

export default function HeaderBar() {
  return (
    <Navbar fixedToTop style={{ backgroundColor: "#013445" }} className={Classes.DARK}>
      <Navbar.Group align={Alignment.LEFT}>
        <img width="40px" alt="banner" />
        <Navbar.Divider/>
        <Navbar.Heading>İstatistiki Ürün Envanteri</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align='right'>
        <div>- Daire Başkanlığı</div>
        <Navbar.Divider/>
        <div className={Classes.TEXT_MUTED}>{process.env.REACT_APP_SURUM}</div>
      </Navbar.Group>
    </Navbar>
  );
}