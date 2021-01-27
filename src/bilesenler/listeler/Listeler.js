import React, { memo, useState, Suspense } from 'react'
import useUrunler from './hook/useUrunler'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliUrunler } from '../store/selectors'
import { Col, Container, Row } from 'react-grid-system'
import Liste from './Liste'
import ListeItem from './ListeItem'
import Arama from './Arama'
import useFiltreliKuruluslar from './hook/useFiltreliKuruluslar'
import useFiltreliBultenler from './hook/useFiltreliBultenler'
import useFiltreliKurumlar from './hook/useFiltreliKurumlar'
import KaynakKurum from './KaynakKurum'
import Kurulus from './Kurulus'
import HaberBulteni from './HaberBulteni'
import IdariKayit from './IdariKayit'
import Anket from './Anket'
import { Ikonlar } from './ikonlar'
import {
  seciliAnketState, seciliBirimlerState, seciliBultenState, seciliCografiDuzeylerState, seciliHaberBulteniDurumuState,
  seciliIdariKayitState,
  seciliKaynakKurulusState,
  seciliKaynakKurumState, seciliUretimSikliklariState,
  seciliUrunState
} from '../store'
import UrunDetay from '../detaylar/UrunDetay'
import DetayListesi from '../detaylar/DetayListesi'
import styled from 'styled-components'
import { Button, Colors } from '@blueprintjs/core'
import UrunlerGrafik from '../grafik/UrunlerGrafik'

const Wrapper = styled.div`
  padding: 62px 0 0;
`

const GostergeAlani = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Gosterge = styled.div`
  flex: 0 50%;
  padding: 20px;
`
const BaslikGosterge = styled.div`
  width: 100%;
  font-size: 1.4em;
  font-weight: bolder;
  color: ${Colors.GRAY3};
  padding: 8px 8px;
  text-align: center;
`

const AramaAlani = styled.div`
  margin-bottom: 48px;
`

const SekmeAlani = styled.div`
  margin-bottom: 12px;
`

const GrafikAlani = styled.div`
  border: 1px solid ${Colors.LIGHT_GRAY3};
  background-color: white;
`

function Listeler () {
  const [gorselAcik, setGorselAcik] = useState(false)
  const urunler = useRecoilValue(siraliUrunler)
  const [seciliUrun, setSeciliUrun] = useRecoilState(seciliUrunState)
  const [seciliKaynakKurum, setSelectedKaynakKurum] = useRecoilState(seciliKaynakKurumState)
  const [seciliAnket, setSeciliAnket] = useRecoilState(seciliAnketState)
  const [seciliIdariKayit, setSeciliIdariKayit] = useRecoilState(seciliIdariKayitState)
  const [seciliKurulus, setSelectedKurulus] = useRecoilState(seciliKaynakKurulusState)
  const [seciliHaberBulteni, setSeciliBulten] = useRecoilState(seciliBultenState)
  const setSeciliHaberBulteniDurumu = useSetRecoilState(seciliHaberBulteniDurumuState)
  const setSeciliCografiDuzeyler = useSetRecoilState(seciliCografiDuzeylerState)
  const setSeciliBirimler = useSetRecoilState(seciliBirimlerState)
  const setUretimSikliklar = useSetRecoilState(seciliUretimSikliklariState)
  const [
    filtreliUrunler,
    selectedUrunKod,
    onUrunAramaChange,
    removeUrunAramaChange,
    handleClickRemoveItem,
    handleClickIstatistikiUrunItem
  ] = useUrunler()
  const filtreliKuruluslar = useFiltreliKuruluslar(filtreliUrunler)
  const filtreliBultenler = useFiltreliBultenler(filtreliUrunler)
  const filtreliKurumlar = useFiltreliKurumlar(filtreliUrunler)

  const handleGorselButonClick = () => {
    setGorselAcik(state => !state)
  }

  const resetFiltre = () => {
    setSelectedKaynakKurum(null);
    setSelectedKurulus(null);
    setSeciliUrun(null);
    setSeciliAnket(null);
    setSeciliBirimler([]);
    setSeciliIdariKayit(null);
    setSeciliBulten(null)
    setSeciliHaberBulteniDurumu(null);
    setSeciliCografiDuzeyler([]);
    setUretimSikliklar([]);
  }

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <Col>
            <SekmeAlani>
              <Button
                minimal
                intent='success'
                active={gorselAcik}
                onClick={handleGorselButonClick}
                icon='graph'>
                  {gorselAcik ? "Ürün Bağlantılarını Gizle" : "Ürün Bağlantılarını Göster"}
              </Button>
              <Button
                minimal
                intent={'danger'}
                onClick={resetFiltre}
                rightIcon={'cross'}
                text={"Filtreleri Temizle"}
              />
            </SekmeAlani>
          </Col>
        </Row>
        {gorselAcik ? (
          <GrafikAlani>
            <UrunlerGrafik />
          </GrafikAlani>
        ) : (
          <Row>
            <Col xs={5} sm={5} md={5} lg={5}>
              <AramaAlani>
                <Arama removeUrunAramaChange={removeUrunAramaChange} onUrunAramaChange={onUrunAramaChange}/>
              </AramaAlani>
              <Liste
                title={'İstatistiki Ürünler'}
                urunler={urunler}
                filtreliUrunler={filtreliUrunler}
                selectedItem={selectedUrunKod}
                handleClickRemoveItem={handleClickRemoveItem}
                length={filtreliUrunler.length}
                itemRenderer={(index, key) => {
                  const urun = filtreliUrunler[index]
                  return (
                    <ListeItem
                      key={key}
                      selected={selectedUrunKod === urun.id}
                      onClick={(event) => handleClickIstatistikiUrunItem(event, urun.id)}
                      text={urun.adi}
                      rightItems={selectedUrunKod !== urun.id && <Ikonlar sayilar={urun.sayilar} bultenler={urun.bultenler} />}
                    />
                  )
                }}/>
            </Col>
            {!seciliUrun ? (
              <Col xs={7} sm={7} md={7} lg={7}>
                <GostergeAlani>
                  <BaslikGosterge>Ürüne Ait İstatististikler</BaslikGosterge>
                  {!seciliKaynakKurum && (
                    <Gosterge>
                      <KaynakKurum filtreliKurumlar={filtreliKurumlar}/>
                    </Gosterge>
                  )}
                  {!seciliKurulus && (
                    <Gosterge>
                      <Kurulus filtreliKuruluslar={filtreliKuruluslar}/>
                    </Gosterge>
                  )}
                  {!seciliHaberBulteni && (
                    <Gosterge>
                      <HaberBulteni filtreliBultenler={filtreliBultenler}/>
                    </Gosterge>
                  )}
                  {!seciliIdariKayit && (
                    <Gosterge>
                      <Suspense fallback={(<div>Yükleniyor</div>)}>
                        <IdariKayit filtreliUrunler={filtreliUrunler}/>
                      </Suspense>
                    </Gosterge>
                  )}
                  {!seciliAnket && (
                    <Gosterge>
                      <Suspense fallback={(<div>Yükleniyor</div>)}>
                        <Anket filteriUrunler={filtreliUrunler}/>
                      </Suspense>
                    </Gosterge>
                  )}
                </GostergeAlani>
              </Col>
            ) : (
              <Col xs={7} sm={7} md={7} lg={7}>
                <UrunDetay/>
                <Suspense fallback={(<div>Yükleniyor...</div>)}>
                  <DetayListesi/>
                </Suspense>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </Wrapper>
  )
}

export default memo(Listeler)
