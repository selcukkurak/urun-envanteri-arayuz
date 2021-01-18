import React from "react";
import {Container, Row, Col} from 'react-grid-system'
import {Classes, Drawer, Divider} from "@blueprintjs/core";
import styled from 'styled-components'

const Icerik = styled.div`
  margin-top: 16px;
`
export const SutunBaslik = styled(Col)`
  font-size: 0.9em;
  font-weight: bold;
  color:black;
  padding-top: 10px;
`

export const SutunIcerik = styled(Col)`
  font-size: 0.9em;
  color:black;
  padding-top: 10px;
`

export default function AnketDetayDrawer(props){
    const {anketValue} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ustDurumu = anketValue.ustDurumu
        ? anketValue.ustDurumu === 1 ? 'Evet' : 'Hayır'
        : 'Belirtilmemiş'

    const harzemliDurumu = anketValue.harzemliDurumu
        ? anketValue.harzemliDurumu === 1 ? 'Evet' : 'Hayır'
        : 'Belirtilmemiş'
    return(
    <div>
        <Container onClick={handleClickOpen}>
            <Row>
                <Col style={{cursor:"pointer",paddingTop:10, color:'#5A6F7B', textDecoration:'underline',fontSize:'0.9em'}}
                     sm={12}>{anketValue.adi}</Col>
            </Row>
        </Container>
        <Drawer
            isOpen={open}
            icon="info-sign"
            onClose={handleClose}
            title={anketValue.adi}
        >
            <Icerik>
              <div className={Classes.DRAWER_BODY}>
                <Container>
                  <Row>
                    <SutunBaslik sm={3}>Periyodu:</SutunBaslik>
                    <SutunIcerik sm={3}>{anketValue.periyot ? anketValue.periyot.adi : '-'}</SutunIcerik>
                    <SutunBaslik sm={3}>Veri Düzeyi:</SutunBaslik>
                    <SutunIcerik sm={3}>{anketValue.birimDuzeyi ? anketValue.birimDuzeyi.adi : '-'}</SutunIcerik>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Divider/>
                    </Col>
                  </Row>
                  <Row>
                    <SutunBaslik sm={3}>Örneklem Boyutu:</SutunBaslik>
                    <SutunIcerik sm={3}>{anketValue.orneklemSayisi}</SutunIcerik>
                    <SutunBaslik sm={3}>Coğrafi Düzeyi:</SutunBaslik>
                    <SutunIcerik sm={3}>{anketValue.cografiDuzey ? anketValue.cografiDuzey.adi : '-'}</SutunIcerik>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Divider/>
                    </Col>
                  </Row>
                  <Row>
                    <SutunBaslik sm={3}>Şeması:</SutunBaslik>
                    <SutunIcerik sm={3}>{anketValue.sema}</SutunIcerik>
                    <SutunBaslik sm={3}>Üst Durumu:</SutunBaslik>
                    <SutunIcerik sm={3}>{ustDurumu}</SutunIcerik>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Divider/>
                    </Col>
                  </Row>
                  <Row>
                    <SutunBaslik sm={3}>Harzemli Durumu:</SutunBaslik>
                    <SutunIcerik sm={3}>{harzemliDurumu}</SutunIcerik>
                  </Row>
                </Container>
              </div>
            </Icerik>
        </Drawer>
    </div>
    )
}