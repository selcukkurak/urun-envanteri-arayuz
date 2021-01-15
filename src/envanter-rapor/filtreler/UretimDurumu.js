import React, {useCallback} from "react";
import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import {seciliUretimDurumuState} from "../store";
import {Label, Tag} from "@blueprintjs/core";

export const Secenek = styled(Tag)`
  float: left;
  height: 20px;
  margin-left:15px;
  
  &:hover {
    cursor:pointer;
  }
;
`

const secenekler = [
    {id:0, durumu:true, adi:"Evet"},
    {id:1, durumu:false, adi: "Hayır"}
]
export default function UretimDurumu(){
    const setSeciliUretimDurumu = useSetRecoilState(seciliUretimDurumuState)

    const handleClickUretimDurumuItem = useCallback((event,index) => {
        setSeciliUretimDurumu(index);
    }, [setSeciliUretimDurumu])
    return(
        <div>
            <Label style={{float:"left"}}>Üretiliyor:</Label>
            {secenekler.map(secenek => (
                <Secenek onClick={(event) =>handleClickUretimDurumuItem(event, secenek.durumu)} key={secenek.id}>{secenek.adi}</Secenek>
            ))}
        </div>

    )
}