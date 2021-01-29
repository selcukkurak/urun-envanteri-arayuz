import React,{memo} from "react";
import styled from "styled-components";
import {BaslikRenkleri} from '@tuik/renkler'
import {seciliUrunDetay, tekilBultenler} from "../store/selectors";
import {useRecoilValue} from "recoil";
import { Card, HTMLTable, Tag } from '@blueprintjs/core'
import BagliUrunListesi from "./BagliUrunListesi";
import DetayAnketlerListesi from "./DetayAnketlerListesi";
import DetayIdariKayitListesi from "./DetayIdariKayitListesi";
import BultenUrl from './BultenUrl'
import { uniqBy } from 'lodash'
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


function DetayListesi (){
    const urun = useRecoilValue(seciliUrunDetay)
    const bultenler = useRecoilValue(tekilBultenler)

    console.debug('Ürün Detay', urun)

    const urunBultenleri = urun && urun.bultenler
        .map(b => bultenler.find(bulten => bulten.id === b.bultenId))
        .filter(bulten => !!bulten)

    if(urunBultenleri.length === 0 && urun.anketler.length === 0 && urun.idariKayitlar.length === 0
        && urun.paylasimlar.length === 0 && urun.urunler.length === 0) return null;

    const periyotlar = uniqBy(urun.paylasimlar.flatMap(paylasim => paylasim.periyot), 'id')
    const araclar = uniqBy(urun.paylasimlar.flatMap(paylasim => paylasim.arac), 'id')
    const kuruluslar = uniqBy(urun.paylasimlar.flatMap(paylasim => paylasim.kurulus), 'id')
    const joinPeriyot = periyotlar.map(p => p.adi).join(', ')
    const joinArac = araclar.map(a => a.adi).join(', ')
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
                                  {kuruluslar.map(kurulus => (
                                    <tr key={kurulus.id}>
                                        <td>{kurulus.adi}</td>
                                        <td><Tag minimal>{joinArac}</Tag></td>
                                        <td><Tag minimal>{joinPeriyot}</Tag></td>
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