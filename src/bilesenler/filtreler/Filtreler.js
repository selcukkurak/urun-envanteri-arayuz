import React, { memo } from 'react'
import styled from 'styled-components'
import AnketlerListesi from './AnketlerListesi'
import UretimSikligiListesi from './UretimSikligiListesi'
import CografiDuzeyListesi from './CografiDuzeyListesi'
import UretimDurumu from './UretimDurumu'
import HaberBulteniDurumu from './HaberBulteniDurumu'
import BirimlerListesi from './BirimlerListesi'
import KaynakKurumListesi from './KaynakKurumListesi'
import KurulusListesi from './KurulusListesi'
import HaberBulteniListesi from './HaberBulteniListesi'
import IdariKayitlarListesi from './IdariKayitlarListesi'
import { AnaRenkler } from '@tuik/renkler'
import { H4 } from '@blueprintjs/core'

const Wrapper = styled.div`
  padding: 70px 12px 12px;
`

const Baslik = styled(H4)`
  color: ${AnaRenkler.koyuKirmizi};
  margin-bottom: 20px;
`

const Row = styled.div`
  margin-bottom: 20px;
`

function Filtreler () {
    return (
        <Wrapper>
            <Baslik>FİLTRELER</Baslik>
            <Row>
                <UretimSikligiListesi />
            </Row>
            <Row>
                <CografiDuzeyListesi />
            </Row>
            <Row>
                <UretimDurumu/>
            </Row>
            <Row>
                <HaberBulteniDurumu/>
            </Row>
            <Row>
                <BirimlerListesi />
            </Row>
            <Row>
                <KaynakKurumListesi />
            </Row>
            <Row>
                <KurulusListesi/>
            </Row>
            <Row>
                <HaberBulteniListesi/>
            </Row>
            <Row>
                <IdariKayitlarListesi/>
            </Row>
            <Row>
                <AnketlerListesi/>
            </Row>
        </Wrapper>
    )
}

export default memo(Filtreler)