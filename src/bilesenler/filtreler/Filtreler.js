import React, { memo } from 'react'
import styled from 'styled-components'
import AnketlerListesi from "./AnketlerListesi";
import UretimSikligiListesi from "./UretimSikligiListesi";
import CografiDuzeyListesi from "./CografiDuzeyListesi";
import UretimDurumu from "./UretimDurumu";
import HaberBulteniDurumu from "./HaberBulteniDurumu";
import BirimlerListesi from "./BirimlerListesi";
import KaynakKurumListesi from "./KaynakKurumListesi";
import KurulusListesi from "./KurulusListesi";
import HaberBulteniListesi from "./HaberBulteniListesi";
import IdariKayitlarListesi from "./IdariKayitlarListesi";

const Wrapper = styled.div`
  padding: 20px 12px 12px;
`

const Baslik = styled.p`
  color: black;
  padding: 40px 4px;
  font-size: 1.2em;
`

const Row = styled.div`
  margin-bottom: 30px;
`

function Filtreler () {
    return (
        <Wrapper>
            <Baslik>
                FİLTRELER
            </Baslik>
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