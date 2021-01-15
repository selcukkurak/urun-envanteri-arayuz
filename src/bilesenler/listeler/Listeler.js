import React, { Fragment, memo, Suspense} from 'react'
import useUrunler from './hook/useUrunler'
import {useRecoilValue} from "recoil";
import {seciliUrun, seciliUrunDetay, siraliUrunler} from "../store/selectors";
import {Container, Row, Col} from 'react-grid-system'
import Liste from "./Liste";
import ListeItem from "./ListeItem";
import Arama from "./Arama";
import useFiltreliKuruluslar from "./hook/useFiltreliKuruluslar";
import useFiltreliBultenler from "./hook/useFiltreliBultenler";
import useFiltreliKurumlar from "./hook/useFiltreliKurumlar";
import KaynakKurum from "./KaynakKurum";
import Kurulus from "./Kurulus";
import HaberBulteni from "./HaberBulteni";
import IdariKayit from "./IdariKayit";
import Anket from "./Anket";
import {AnketIkon, IdariKayitIkon} from "./ikonlar";
import {seciliUrunState} from "../store";
import UrunDetay from "../detaylar/UrunDetay";
import DetayListesi from "../detaylar/DetayListesi";


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
        <Fragment>
            <Container>
                <Row>
                    <Col md={5}>
                        <Arama onUrunAramaChange={onUrunAramaChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
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
                                        rightItems={(
                                            <div style={{flex: 1}}>
                                                {urun.sayilar.anket !== 0 && <AnketIkon />}
                                                {urun.sayilar.idariKayit !== 0 && <IdariKayitIkon />}
                                            </div>
                                        )}
                                    />
                                )
                            }} />
                    </Col>
                    {!seciliUrun ? (
                        <Col md={6}>
                            <KaynakKurum filtreliKurumlar={filtreliKurumlar}/>
                            <Kurulus filtreliKuruluslar={filtreliKuruluslar}/>
                            <HaberBulteni filtreliBultenler={filtreliBultenler}/>
                            <Suspense fallback={(<div>Yükleniyor</div>)}>
                                <IdariKayit/>
                                <Anket/>
                            </Suspense>

                        </Col>
                    ) : (
                        <Col sm={6}>
                            <UrunDetay/>
                            <Suspense fallback={(<div>Yükleniyor...</div>)}>
                                <DetayListesi/>
                            </Suspense>
                        </Col>
                    )}

                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(Listeler)
