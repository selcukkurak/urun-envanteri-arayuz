import React, {useCallback} from "react";
import {Secenek} from "./UretimDurumu";
import {useRecoilState} from "recoil/dist";
import {seciliHaberBulteniDurumuState} from "../store";
import {Label} from "@blueprintjs/core";

const durumlar = [
    {id:0, adi:"Var"},
    {id:1, adi: "Yok"}
]
export default function HaberBulteniDurumu(){
    const [seciliHaberBulteniDurumu, setSeciliHaberBulteniDurumu] = useRecoilState(seciliHaberBulteniDurumuState)

    const handleClickHaberBulteniDurumuItem = useCallback((event, durumu) => {
        setSeciliHaberBulteniDurumu(durumu)
    }, [setSeciliHaberBulteniDurumu])
    console.log(seciliHaberBulteniDurumu)
    return(
        <div>
            <Label style={{clear:"both", float:"left"}}>Haber Bülteni:</Label>
            {durumlar.map(durum => (
                <Secenek active={seciliHaberBulteniDurumu} onClick={(event) => handleClickHaberBulteniDurumuItem(event, durum.adi)} key={durum.id}>{durum.adi}</Secenek>
            ))}
        </div>
    )
}