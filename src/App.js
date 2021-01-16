import React, { memo } from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'
import { Colors } from '@blueprintjs/core'
import UrunLoader from './bilesenler/loader/UrunLoader'
import BultenLoader from './bilesenler/loader/BultenLoader'
import ReferansLoader from './bilesenler/loader/ReferansLoader'
import BirimLoader from './bilesenler/loader/BirimLoader'
import AnketLoader from './bilesenler/loader/AnketLoader'
import IdariKayitLoader from './bilesenler/loader/IdariKayitLoader'
import HeaderBar from './bilesenler/HeaderBar'
import Filtreler from './bilesenler/filtreler/Filtreler'
import Listeler from './bilesenler/listeler/Listeler'
import GlobalStyle from './bilesenler/globalStiller'

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
  background-color: ${Colors.LIGHT_GRAY5};
  border-right: 1px solid ${Colors.LIGHT_GRAY2}
`
const OrtaBolme = styled.div`
  margin-left: 320px;
  height: 100vh;
`

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle/>
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
