import React,{memo} from "react";
import {Button, Card, Label} from "@blueprintjs/core";
import {birimlerById, seciliUrun} from "../store/selectors";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Container, Row, Col} from 'react-grid-system'
import MetaveriDetayDialog from "./MetaveriDetayDialog";
import MetodolojiDetayDialog from "./MetodolojiDetayDialog";
import styled from "styled-components";
import {seciliUrunState} from "../store";
const Wrapper = styled.div`
  margin-bottom: 24px;
`

const CardHeader = styled.div`
  padding: 16px 16px 4px;
  border-bottom: 1px solid lightgray;
`

const Header = styled.div`
  color: gray;
  font-weight: bold;
`
const uretimDurumu = durum => durum ? 'Üretiliyor' : 'Üretilmiyor'
function UrunDetay(){
    const birimler = useRecoilValue(birimlerById)
    const urun = useRecoilValue(seciliUrun)
    const setSeciliUrun = useSetRecoilState(seciliUrunState)

    const urunuTemizle = () => {
        setSeciliUrun(null)
    }
    console.debug(urun)
    if (!urun) return null

    const birim = birimler[urun.birimId]
    const daire = birimler[birim.ustBirimId]
    return(
        <Wrapper>
            <Card>
                <Button minimal intent={"danger"} text={"Kapat"} icon='cross' onClick={urunuTemizle}/>
                <CardHeader>
                    <h5 className="bp3-heading">
                        <Header>{urun.adi}</Header>
                    </h5>
                </CardHeader>
                <Container>
                    <Row>
                        <Col sm={3}>Daire Başkanlığı</Col>
                        <Col sm={9}>{daire.adi}</Col>
                    </Row>
                    <Row>
                        <Col sm={3}><Label>Üretici Birim</Label></Col>
                        <Col sm={9}>{birim.adi}</Col>
                    </Row>
                    <Row>
                        <Col sm={3}><Label>Üretim Sıklığı</Label></Col>
                        <Col sm={3}>{urun.periyot ? urun.periyot.adi : '-'}</Col>
                        <Col sm={3}>Coğrafi Düzey</Col>
                        <Col sm={3}>{urun.cografiDuzey ? urun.cografiDuzey.adi : '-'}</Col>
                    </Row>
                    <Row>
                        <Col sm={3}><Label>Üretim Durumu</Label></Col>
                        <Col sm={3}>{uretimDurumu(urun.uretiliyor)}</Col>
                    </Row>
                    <Row>
                        <Col sm={6}><MetaveriDetayDialog/></Col>
                        <Col sm={6}><MetodolojiDetayDialog/></Col>
                    </Row>
                </Container>
            </Card>
        </Wrapper>

    )
}
export default memo(UrunDetay)
