import React,{memo} from "react";
import styled from "styled-components";
import {BaslikRenkleri} from '@tuik/renkler'
import {seciliUrunDetay, tekilBultenler} from "../store/selectors";
import {useRecoilValue} from "recoil";
import {Card, HTMLTable} from "@blueprintjs/core";
import BagliUrunListesi from "./BagliUrunListesi";
import DetayAnketlerListesi from "./DetayAnketlerListesi";
import DetayIdariKayitListesi from "./DetayIdariKayitListesi";
import BultenUrl from './BultenUrl'

const Bolum = styled.div`
  margin-bottom: 12px;
`

const Row = styled.div`
  margin-bottom: 12px;
`


const SubHeader = styled.div`
  font-weight: bold;
  color: ${BaslikRenkleri.gri};
  margin-bottom: 8px;
`


function DetayListesi(){
    const urun = useRecoilValue(seciliUrunDetay)
    const bultenler = useRecoilValue(tekilBultenler)

    console.debug('Ürün Detay', urun)



    const urunBultenleri = urun && urun.bultenler
        .map(b => bultenler.find(bulten => bulten.id === b.bultenId))
        .filter(bulten => !!bulten)

    return(
        <div>
            <Bolum>
                <Card>
                    <Row>
                            {urun && urunBultenleri.length !== 0 && (
                                <Row>
                                    <SubHeader>Haber Bültenleri</SubHeader>
                                    {urunBultenleri.map(bulten => (
                                        <Row key={bulten.id}>
                                          <BultenUrl bulten={bulten} />
                                        </Row>
                                    ))}
                                </Row>
                            )}
                            {urun && urun.paylasimlar.length > 0 && (
                                <Row>
                                    <SubHeader>Paylaşımlar</SubHeader>
                                    <HTMLTable size='small'>
                                        <thead>
                                            <tr>
                                                <td>Paylaşılan Kuruluş</td>
                                                <td>Kullanılan Araç</td>
                                                <td>Gönderi Sıklığı</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {urun.paylasimlar.map(paylasim => (
                                                <tr key={paylasim.id}>
                                                    <td>{paylasim.kurulus.adi}</td>
                                                    <td>{paylasim.arac.adi}</td>
                                                    <td>{paylasim.periyot.adi}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </HTMLTable>
                                </Row>
                            )}
                            {urun && urun.urunler.length > 0 && (
                                <Row>
                                    <SubHeader>Bağlı Ürünler</SubHeader>
                                    <BagliUrunListesi urunler={urun.urunler} />
                                </Row>
                            )}
                            {urun && urun.idariKayitlar.length > 0 && (
                                <Row>
                                    <SubHeader>İdari Kayıtlar</SubHeader>
                                    <DetayIdariKayitListesi idariKayitlar={urun.idariKayitlar} />
                                </Row>
                            )}
                            {urun && urun.anketler.length > 0 && (
                                <Row>
                                    <SubHeader>Anketler</SubHeader>
                                    <DetayAnketlerListesi anketler={urun.anketler} />
                                </Row>
                            )}
                    </Row>
                </Card>
            </Bolum>
        </div>
    )
}
export default memo(DetayListesi)