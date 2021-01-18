import React, {useState} from "react";
import {Container, Row, Col} from 'react-grid-system'
import { Classes, Drawer, Divider, HTMLTable} from "@blueprintjs/core";
import {siraliKurumlar} from "../store/selectors";
import {useRecoilValue} from "recoil";
import { SutunBaslik, SutunIcerik } from './AnketDetayDialog'


const GridDivider = () => {
    return (
        <Row>
            <Col sm={12}>
                <Divider/>
            </Col>
        </Row>
    )
}
export default function IdariKayitDrawer(props){
    const {idariKayitValue} = props
    const [open, setOpen] = React.useState(false)
    const [, setSelectedItem] = useState(null)

    const kurumlar = useRecoilValue(siraliKurumlar)
    const kurum = kurumlar.find(k => k.kodu === idariKayitValue.kaynakKurumId)

    const handleClickOpen = (index) => {
        setSelectedItem(index)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div>
            <Container onClick={handleClickOpen}>
                <Row>
                    <Col sm={12} style={{cursor:"pointer", paddingTop:10, color:'#5A6F7B', textDecoration:'underline',fontSize:'0.9em'}}>
                        {idariKayitValue.adi}
                    </Col>
                </Row>
            </Container>
            <Drawer
                isOpen={open}
                icon="info-sign"
                onClose={handleClose}
                title={idariKayitValue.adi}
            >
                <div className={Classes.DRAWER_BODY}>
                    <Container>
                        <Row>
                            <SutunBaslik sm={3}>İçerik:</SutunBaslik>
                            <SutunIcerik sm={9}>{idariKayitValue.icerik}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Kaynak Kurum:</SutunBaslik>
                            <SutunIcerik sm={9}>{kurum && kurum.adi}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Kaynak Birim:</SutunBaslik>
                            <SutunIcerik sm={9}>{idariKayitValue.kaynakBirim}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Yasal Hükümler:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.yasalHukum}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Veri Biçimi:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.bicim && idariKayitValue.bicim.adi}</SutunIcerik>
                            <SutunBaslik sm={3}>Düzey:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.veriDuzeyi && idariKayitValue.veriDuzeyi.adi}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Veri Talep Biçimi:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.talepBicimi && idariKayitValue.talepBicimi.adi}</SutunIcerik>
                            <SutunBaslik sm={3}>Transfer Sıklık:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.transferPeriyot && idariKayitValue.transferPeriyot.adi}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Aktarım Türü:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.aktarimTuru && idariKayitValue.aktarimTuru.adi}</SutunIcerik>
                            <SutunBaslik sm={3}>Transfer Sorumlu Birim:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.transferdenSorumluBirim}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Hedef TÜİK Veritabanı:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.veritabani}</SutunIcerik>
                            <SutunBaslik sm={3}>Hedef TÜİK Şema:</SutunBaslik>
                            <SutunIcerik sm={3}>{idariKayitValue.sema}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>İletişim E-posta Grubu:</SutunBaslik>
                            <SutunIcerik sm={9}>{idariKayitValue.epostaGruplari}</SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>İletişim:</SutunBaslik>
                        </Row>
                        <Row>
                            <SutunIcerik sm={12}>
                                <HTMLTable>
                                    <thead>
                                        <tr>
                                            <td>Adı</td>
                                            <td>Birim</td>
                                            <td>Telefon</td>
                                            <td>E-Posta</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {idariKayitValue.iletisimKisileri.filter(kisi => kisi.kurumDisi).map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.adSoyad}</td>
                                            <td>{row.disBirimAdi}</td>
                                            <td>{row.telefon}</td>
                                            <td>{row.eposta}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </HTMLTable>
                            </SutunIcerik>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <SutunBaslik sm={3}>Kurum İçi İletişim:</SutunBaslik>
                        </Row>
                        <Row>
                            <SutunIcerik sm={12}>
                                <HTMLTable>
                                    <thead>
                                    <tr>
                                        <td>Adı</td>
                                        <td>Birim</td>
                                        <td>Telefon</td>
                                        <td>E-Posta</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {idariKayitValue.iletisimKisileri.filter(kisi => !kisi.kurumDisi).map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.adSoyad}</td>
                                            <td>{row.disBirimAdi}</td>
                                            <td>{row.telefon}</td>
                                            <td>{row.eposta}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </HTMLTable>
                            </SutunIcerik>
                        </Row>
                    </Container>
                </div>
            </Drawer>
        </div>


    )
}