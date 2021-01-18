import React, { memo, useState, Suspense } from 'react'
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
import { seciliUrunState } from '../store'
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
  const seciliUrun = useRecoilValue(seciliUrunState)
  const [
    filtreliUrunler,
    selectedUrunKod,
    onUrunAramaChange,
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
                  {gorselAcik ? "Ürün Bağlantılarını Gizle" : "Ürün Bağlantılarını Göster"}
              </Button>
            </SekmeAlani>
          </Col>
        </Row>
        {gorselAcik ? (
          <GrafikAlani>
            <UrunlerGrafik />
          </GrafikAlani>
        ) : (
          <Row>
            <Col md={5}>
              <AramaAlani>
                <Arama onUrunAramaChange={onUrunAramaChange}/>
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
              <Col md={5}>
                <GostergeAlani>
                  <Gosterge>
                    <KaynakKurum filtreliKurumlar={filtreliKurumlar}/>
                  </Gosterge>
                  <Gosterge>
                    <Kurulus filtreliKuruluslar={filtreliKuruluslar}/>
                  </Gosterge>
                  <Gosterge>
                    <HaberBulteni filtreliBultenler={filtreliBultenler}/>
                  </Gosterge>
                  <Gosterge>
                    <Suspense fallback={(<div>Yükleniyor</div>)}>
                      <IdariKayit sayilar={filtreliUrunler.map(urun => urun.sayilar)}/>
                    </Suspense>
                  </Gosterge>
                  <Gosterge>
                    <Suspense fallback={(<div>Yükleniyor</div>)}>
                      <Anket sayilar={filtreliUrunler.map(urun => urun.sayilar)}/>
                    </Suspense>
                  </Gosterge>
                </GostergeAlani>
              </Col>
            ) : (
              <Col sm={7}>
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
