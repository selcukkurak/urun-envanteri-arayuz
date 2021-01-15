
import React, { memo, Suspense } from 'react'
import './App.css'
import styled from 'styled-components'
import {RecoilRoot} from "recoil";
import {Colors} from "@blueprintjs/core";
import {Container, Row, Col} from 'react-grid-system'
import UrunLoader from "./bilesenler/loader/UrunLoader";
import BultenLoader from "./bilesenler/loader/BultenLoader";
import ReferansLoader from "./bilesenler/loader/ReferansLoader";
import BirimLoader from "./bilesenler/loader/BirimLoader";
import AnketLoader from "./bilesenler/loader/AnketLoader";
import IdariKayitLoader from "./bilesenler/loader/IdariKayitLoader";
import HeaderBar from "./bilesenler/HeaderBar";
import Filtreler from "./bilesenler/filtreler/Filtreler";
import Listeler from "./bilesenler/listeler/Listeler";
import UrunDetay from "./bilesenler/detaylar/UrunDetay";
import DetayListesi from "./bilesenler/detaylar/DetayListesi";

const Wrapper = styled.div`
    padding: 0;
`

const YanMenu = styled.div`
  width: 320px;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: auto;
  background-color: white;
  border:1px solid ${Colors.LIGHT_GRAY3}
`
const OrtaBolme = styled.div`;
  width: 100%;
  margin-top: 20px;
  margin-left: 320px;
  height: 100vh;
  background-color:whitesmoke;
`

function App() {
  return (
      <RecoilRoot>
          <UrunLoader />
          <BultenLoader />
          <ReferansLoader />
          <BirimLoader />
          <AnketLoader/>
          <IdariKayitLoader/>
          <Wrapper>
              <HeaderBar/>
            <YanMenu>
              <Filtreler />
            </YanMenu>
              <OrtaBolme>
                  <Container>
                      <Row>
                          <Col sm={12}>
                              <Listeler/>
                          </Col>
                      </Row>
                  </Container>

              </OrtaBolme>
          </Wrapper>
      </RecoilRoot>
  );
}

export default memo(App);
