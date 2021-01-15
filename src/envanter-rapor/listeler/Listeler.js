import React, { Fragment, memo, Suspense} from 'react'
import useUrunler from './hook/useUrunler'
import {useRecoilValue} from "recoil/dist";
import {seciliUrunDetay, siraliUrunler} from "../store/selectors";
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


function Listeler () {
    const urunler = useRecoilValue(siraliUrunler)
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
                    <Col md={7}>
                        <Arama onUrunAramaChange={onUrunAramaChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
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
                    <Col md={4}>
                        <KaynakKurum filtreliKurumlar={filtreliKurumlar}/>
                        <Kurulus filtreliKuruluslar={filtreliKuruluslar}/>
                        <HaberBulteni filtreliBultenler={filtreliBultenler}/>
                        <Suspense fallback={(<div>Yükleniyor</div>)}>
                            <IdariKayit/>
                            <Anket/>
                        </Suspense>

                    </Col>
                {/*    <Col item xs>*/}
                {/*        <Liste*/}
                {/*            title={<GostergeHeader gosterge={filtreliBultenler.length} baslik='Haber Bülteni' />}*/}
                {/*            onAramaChange={onHaberBulteniAramaChange}*/}
                {/*            length={filtreliBultenler.length}*/}
                {/*            itemRenderer={(index, key) => {*/}
                {/*                const bulten = filtreliBultenler[index]*/}
                {/*                return (*/}
                {/*                    <ListeItem*/}
                {/*                        key={key}*/}
                {/*                        text={bulten.adi} />*/}
                {/*                )*/}
                {/*            }} />*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row style={{marginTop:"5px"}}>*/}
                {/*    <Col item xs={6}>*/}
                {/*        <Liste*/}
                {/*            title={<GostergeHeader gosterge={filtreliKurumlar.length} baslik='Kaynak Kurum' />}*/}
                {/*            selectedItem={selectedKaynakKurum}*/}
                {/*            handleClickRemoveItem={handleClickRemoveKaynakKurumiItem}*/}
                {/*            onAramaChange={onKurumAramaChange}*/}
                {/*            length={filtreliKurumlar.length}*/}
                {/*            itemRenderer={(index, key) => {*/}
                {/*                const kurum = filtreliKurumlar[index]*/}
                {/*                return (*/}
                {/*                    <ListeItem*/}
                {/*                        key={key}*/}
                {/*                        selected={selectedKaynakKurum===kurum.kodu}*/}
                {/*                        onClick={(event) => handleClickKaynakKurumItem(event, kurum.kodu)}*/}
                {/*                        text={kurum.adi} />*/}
                {/*                )*/}
                {/*            }} />*/}
                {/*    </Col>*/}
                {/*    <Col item xs={6}>*/}
                {/*        <Liste*/}
                {/*            title={<GostergeHeader gosterge={filtreliKuruluslar.length} baslik='Paylaşılan Kuruluş' />}*/}
                {/*            selectedItem={selectedKaynakKurulus}*/}
                {/*            handleClickRemoveItem={handleClickRemoveKaynakKurulusiItem}*/}
                {/*            onAramaChange={onKurulusAramaChange}*/}
                {/*            length={filtreliKuruluslar.length}*/}
                {/*            itemRenderer={(index, key) => {*/}
                {/*                const kurulus = filtreliKuruluslar[index]*/}
                {/*                return (*/}
                {/*                    <ListeItem*/}
                {/*                        key={key}*/}
                {/*                        selected={selectedKaynakKurulus===kurulus.id}*/}
                {/*                        onClick={(event) => handleClickKaynakKurulusItem(event, kurulus.id)}*/}
                {/*                        text={kurulus.adi} />*/}
                {/*                )*/}
                {/*            }} />*/}
                {/*    </Col>*/}
                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(Listeler)
