import React from "react";
import {Container, Row, Col} from 'react-grid-system'
import {Button, Classes, Dialog, Divider} from "@blueprintjs/core";
export default function AnketDetayDialog(props){
    const {anketValue} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ustDurumu = anketValue.ustDurumu
        ? anketValue.ustDurumu === 1 ? 'Evet' : 'Hayır'
        : 'Belirtilmemiş'

    const harzemliDurumu = anketValue.harzemliDurumu
        ? anketValue.harzemliDurumu === 1 ? 'Evet' : 'Hayır'
        : 'Belirtilmemiş'
    return(
    <div>
        <Container onClick={handleClickOpen}>
            <Row>
                <Col style={{cursor:"pointer",paddingTop:10, color:'#5A6F7B', textDecoration:'underline',fontSize:'0.9em'}}
                     sm={12}>{anketValue.adi}</Col>
            </Row>
        </Container>
        <Dialog
            isOpen={open}
            icon="info-sign"
            onClose={handleClose}
            title={anketValue.adi}
        >
            <div className={Classes.DIALOG_BODY}>
                <Container>
                    <Row>
                        <Col sm={3}>Periyodu:</Col>
                        <Col sm={3}>{anketValue.periyot ? anketValue.periyot.adi : '-'}</Col>
                        <Col sm={3}>Veri Düzeyi:</Col>
                        <Col sm={3}>{anketValue.birimDuzeyi ? anketValue.birimDuzeyi.adi : '-'}</Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>Örneklem Boyutu:</Col>
                        <Col sm={3}>{anketValue.orneklemSayisi}</Col>
                        <Col sm={3}>Coğrafi Düzeyi:</Col>
                        <Col sm={3}>{anketValue.cografiDuzey ? anketValue.cografiDuzey.adi : '-'}</Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>Şeması:</Col>
                        <Col sm={3}>{anketValue.sema}</Col>
                        <Col sm={3}>Üst Durumu:</Col>
                        <Col sm={3}>{ustDurumu}</Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>Harzemli Durumu:</Col>
                        <Col sm={3}>{harzemliDurumu}</Col>
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