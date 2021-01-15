
import React, { memo, Suspense } from 'react'
import 'typeface-roboto'
import './App.css'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil/dist'
import AnketLoader from "./envanter-rapor/loader/AnketLoader";
import IdariKayitLoader from "./envanter-rapor/loader/IdariKayitLoader";
import UrunLoader from "./envanter-rapor/loader/UrunLoader";
import BultenLoader from "./envanter-rapor/loader/BultenLoader";
import ReferansLoader from "./envanter-rapor/loader/ReferansLoader";
import BirimLoader from "./envanter-rapor/loader/BirimLoader";
import Filtreler from "./envanter-rapor/filtreler/Filtreler";
import Listeler from "./envanter-rapor/listeler/Listeler";
import HeaderBar from "./envanter-rapor/HeaderBar";
import {Colors} from "@blueprintjs/core";


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
  position: fixed;
  width: 100%;
  margin:20px 320px;
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
                  <Listeler/>
              </OrtaBolme>
          </Wrapper>
      </RecoilRoot>
  );
}

export default memo(App);
