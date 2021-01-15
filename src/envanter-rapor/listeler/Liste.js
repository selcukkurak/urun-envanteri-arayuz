import React,{memo} from "react";
import styled from "styled-components";
import {Button, Card, Menu} from "@blueprintjs/core";
import ReactList from 'react-list';
import {AnaRenkler, BaslikRenkleri} from "@tuik/renkler";


const SolaYasli = styled.div`
  font-size: 1.5em;
  color: ${BaslikRenkleri.gri};
  flex: 1
`
const SagaYasli = styled.div`
  margin-top: -25px;
  font-size: medium;
  float: right;
`
const CloseButton = styled(Button)`
  margin-top: -30px;
  float: right;
`
const UrunListesi = styled(Menu)`
  padding: 0;
  height: 500px;
  overflow: auto;
`
export const SayiGosterge = styled.div`
  display: inline-block;
  color: ${AnaRenkler.koyuKirmizi};
  margin-left: 5px ;
  margin-right: 12px;
  
`
function Liste (props) {
    console.log(props)
    return(
        <div style={{marginTop:"15%"}}>
            <SolaYasli>{props.title}</SolaYasli>
            <SagaYasli>
                TOPLAM
                <SayiGosterge>{props.filtreliUrunler && props.filtreliUrunler.length}</SayiGosterge>
                /
                <SayiGosterge>{props.urunler && props.urunler.length}</SayiGosterge>
            </SagaYasli>
            <Card>
                <UrunListesi>
                    <ReactList
                        type='variable'
                        itemRenderer={props.itemRenderer}
                        length={props.length} />
                </UrunListesi>
            </Card>
        </div>

    )
}
export default memo(Liste)