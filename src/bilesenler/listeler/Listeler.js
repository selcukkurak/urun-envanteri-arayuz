import React, { memo, Suspense, useState } from 'react'
import useUrunler from './hook/useUrunler'
import { useRecoilValue } from 'recoil'
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
  seciliAnketState,
  seciliBultenState,
  seciliIdariKayitState,
  seciliKaynakKurulusState,
  seciliKaynakKurumState,
  seciliUrunState
} from '../store'
import UrunDetay from '../detaylar/UrunDetay'
import DetayListesi from '../detaylar/DetayListesi'
import styled from 'styled-components'
import { Button, Colors } from '@blueprintjs/core'
import ResetFiltre from './ResetFiltre'
import UrunlerGrafikYeni from '../grafik/UrunlerGrafik'

const Wrapper = styled.div`
  padding: 62px 0 0;
`

const GostergeAlani = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Gosterge = styled.div`
  flex: 0 50%;
  padding: 5px;
`
const BaslikGosterge = styled.div`
  width: 100%;
  font-size: 1.4em;
  font-weight: bolder;
  color: ${Colors.GRAY1};
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

const baglantilarSayfasinaGit = window.location.pathname === '/baglantilar'

function Listeler () {
  const [gorselAcik, setGorselAcik] = useState(baglantilarSayfasinaGit)
  const urunler = useRecoilValue(siraliUrunler)
  const seciliUrun = useRecoilValue(seciliUrunState)
  const seciliKaynakKurum = useRecoilValue(seciliKaynakKurumState)
  const seciliAnket = useRecoilValue(seciliAnketState)
  const seciliIdariKayit = useRecoilValue(seciliIdariKayitState)
  const seciliKurulus = useRecoilValue(seciliKaynakKurulusState)
  const seciliHaberBulteni = useRecoilValue(seciliBultenState)
  const [
    filtreliUrunler,
    selectedUrunKod,
    onUrunAramaChange,
    arananUrun,
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
                  {gorselAcik ? "??r??n Ba??lant??lar??n?? Gizle" : "??r??n Ba??lant??lar??n?? G??ster"}
              </Button>
              <ResetFiltre aranan={arananUrun} removeUrunAramaChange={removeUrunAramaChange}/>
            </SekmeAlani>
          </Col>
        </Row>
        {gorselAcik ? (
          <GrafikAlani>
            <UrunlerGrafikYeni />
          </GrafikAlani>
        ) : (
          <Row>
            <Col xs={5} sm={5} md={5} lg={5}>
              <AramaAlani>
                <Arama arananUrun={arananUrun} onUrunAramaChange={onUrunAramaChange}/>
              </AramaAlani>
              <Liste
                title={'??statistiki ??r??nler'}
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
              <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                <GostergeAlani>
                  <BaslikGosterge>Listelenen ??r??nlere Ait ??statististikler</BaslikGosterge>
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
                      <Suspense fallback={(<div>Y??kleniyor</div>)}>
                        <IdariKayit filtreliUrunler={filtreliUrunler}/>
                      </Suspense>
                    </Gosterge>
                  )}
                  {!seciliAnket && (
                    <Gosterge>
                      <Suspense fallback={(<div>Y??kleniyor</div>)}>
                        <Anket filteriUrunler={filtreliUrunler}/>
                      </Suspense>
                    </Gosterge>
                  )}
                </GostergeAlani>
              </Col>
            ) : (
              <Col xs={7} sm={7} md={7} lg={7}>
                <UrunDetay/>
                <Suspense fallback={(<div>Y??kleniyor...</div>)}>
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
