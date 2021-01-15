import React, {memo} from "react";
import {useRecoilValue} from "recoil/dist";
import {seciliUrunDetay, siraliIdariKayitlar} from "../store/selectors";
import {SayiGosterge} from "./Liste";
import {Card} from "@blueprintjs/core";


function IdariKayit (props) {
    const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
    const urun = useRecoilValue(seciliUrunDetay)

    return(
        <Card style={{textAlign:"justify", marginTop:"5%"}}>
                <SayiGosterge>{urun ? urun.idariKayitlar.length : 0}</SayiGosterge>
                /
                <SayiGosterge>{idariKayitlar.length}</SayiGosterge>
                İDARİ KAYIT
        </Card>

    )
}

export default memo(IdariKayit)