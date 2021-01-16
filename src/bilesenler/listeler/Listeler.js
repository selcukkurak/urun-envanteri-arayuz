import React, { memo, Suspense } from 'react'
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

const Wrapper = styled.div`
  padding: 70px 0 0;
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

function Listeler () {
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
  return (
    <Wrapper>
      <Container fluid>
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
                    <IdariKayit/>
                  </Suspense>
                </Gosterge>
                <Gosterge>
                  <Suspense fallback={(<div>Yükleniyor</div>)}>
                    <Anket/>
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
      </Container>
    </Wrapper>
  )
}

export default memo(Listeler)
