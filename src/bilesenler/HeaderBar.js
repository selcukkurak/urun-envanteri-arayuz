import React from 'react';
import logo from './images/tuik-logo.svg';
import { Alignment, Classes, Navbar } from '@blueprintjs/core'
import { ArayuzRenkleri } from '@tuik/renkler'

export default function HeaderBar() {
  return (
    <Navbar fixedToTop style={{ backgroundColor: ArayuzRenkleri.ustMenu }} className={Classes.DARK}>
      <Navbar.Group align={Alignment.LEFT}>
        <img src={logo} width="40px" alt="banner" />
        <Navbar.Divider/>
        <Navbar.Heading>İstatistiki Ürün Envanteri</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align='right'>
        <div>Metaveri ve Kayıt Sistemleri Daire Başkanlığı</div>
        <Navbar.Divider/>
        <div className={Classes.TEXT_MUTED}>{process.env.REACT_APP_SURUM}</div>
      </Navbar.Group>
    </Navbar>
  );
}