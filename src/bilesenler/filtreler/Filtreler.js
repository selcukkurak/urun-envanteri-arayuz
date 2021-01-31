import React, { memo } from 'react'
import styled from 'styled-components'
import AnketlerListesi from './AnketlerListesi'
import UretimSikligiListesi from './UretimSikligiListesi'
import CografiDuzeyListesi from './CografiDuzeyListesi'
import HaberBulteniDurumu from './HaberBulteniDurumu'
import BirimlerListesi from './BirimlerListesi'
import KaynakKurumListesi from './KaynakKurumListesi'
import KurulusListesi from './KurulusListesi'
import HaberBulteniListesi from './HaberBulteniListesi'
import IdariKayitlarListesi from './IdariKayitlarListesi'
import { AnaRenkler } from '@tuik/renkler'
import { H4 } from '@blueprintjs/core'
import useUrunler from '../listeler/hook/useUrunler'

const Wrapper = styled.div`
  padding: 70px 12px 12px;
`

const Baslik = styled(H4)`
  color: ${AnaRenkler.koyuKirmizi};
  margin-bottom: 20px;
`

const Row = styled.div`
  margin-bottom: 24px;
`

function Filtreler () {
  const [filtreliUrunler] = useUrunler()
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
                <HaberBulteniDurumu/>
            </Row>
            <Row>
                <BirimlerListesi filtreliUrunler={filtreliUrunler} />
            </Row>
            <Row>
                <KaynakKurumListesi filtreliUrunler={filtreliUrunler} />
            </Row>
            <Row>
                <KurulusListesi filtreliUrunler={filtreliUrunler}/>
            </Row>
            <Row>
                <HaberBulteniListesi filtreliUrunler={filtreliUrunler}/>
            </Row>
            <Row>
                <IdariKayitlarListesi filtreliUrunler={filtreliUrunler}/>
            </Row>
            <Row>
                <AnketlerListesi filtreliUrunler={filtreliUrunler}/>
            </Row>
        </Wrapper>
    )
}

export default memo(Filtreler)