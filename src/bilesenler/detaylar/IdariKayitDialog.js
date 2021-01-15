import React, {useState} from "react";
import {Container, Row, Col} from 'react-grid-system'
import {Button, Classes, Dialog, Divider, HTMLTable} from "@blueprintjs/core";
import {siraliKurumlar} from "../store/selectors";
import {useRecoilValue} from "recoil";


const GridDivider = props => {
    return (
        <Row>
            <Col sm={12}>
                <Divider/>
            </Col>
        </Row>
    )
}
export default function IdariKayitDialog(props){
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
            <Dialog
                isOpen={open}
                icon="info-sign"
                onClose={handleClose}
                title={idariKayitValue.adi}
            >
                <div className={Classes.DIALOG_BODY}>
                    <Container>
                        <Row>
                            <Col sm={3}>İçerik:</Col>
                            <Col sm={3}>{idariKayitValue.icerik}</Col>
                            <Col sm={3}>Kaynak Kurum:</Col>
                            <Col sm={3}>{kurum && kurum.adi}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Kaynak Birim:</Col>
                            <Col sm={9}>{idariKayitValue.kaynakBirim}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Yasal Hükümler:</Col>
                            <Col sm={3}>{idariKayitValue.yasalHukum}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Veri Biçimi:</Col>
                            <Col sm={3}>{idariKayitValue.bicim && idariKayitValue.bicim.adi}</Col>
                            <Col sm={3}>Düzey:</Col>
                            <Col sm={3}>{idariKayitValue.veriDuzeyi && idariKayitValue.veriDuzeyi.adi}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Veri Talep Biçimi:</Col>
                            <Col sm={3}>{idariKayitValue.talepBicimi && idariKayitValue.talepBicimi.adi}</Col>
                            <Col sm={3}>Transfer Sıklık:</Col>
                            <Col sm={3}>{idariKayitValue.transferPeriyot && idariKayitValue.transferPeriyot.adi}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Aktarım Türü:</Col>
                            <Col sm={3}>{idariKayitValue.aktarimTuru && idariKayitValue.aktarimTuru.adi}</Col>
                            <Col sm={3}>Transfer Sorumlu Birim:</Col>
                            <Col sm={3}>{idariKayitValue.transferdenSorumluBirim}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Hedef TÜİK Veritabanı:</Col>
                            <Col sm={3}>{idariKayitValue.veritabani}</Col>
                            <Col sm={3}>Hedef TÜİK Şema:</Col>
                            <Col sm={3}>{idariKayitValue.sema}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>İletişim E-posta Grubu:</Col>
                            <Col sm={9}>{idariKayitValue.epostaGruplari}</Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>İletişim:</Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
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
                            </Col>
                        </Row>
                        <GridDivider/>
                        <Row>
                            <Col sm={3}>Kurum İçi İletişim:</Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
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
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={handleClose}>Kapat</Button>
                    </div>
                </div>
            </Dialog>
        </div>


    )
}