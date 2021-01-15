import React, {memo} from "react";
import {useRecoilValue} from "recoil/dist";
import {siraliKurumlar} from "../store/selectors";
import {SayiGosterge} from "./Liste";
import {Card} from "@blueprintjs/core";


function KaynakKurum (props) {
    const kaynakKurumlar = useRecoilValue(siraliKurumlar)

    return(
            <Card style={{marginTop:"22%", textAlign:"justify"}}>
                    <SayiGosterge>{props.filtreliKurumlar.length}</SayiGosterge>
                    /
                    <SayiGosterge>{kaynakKurumlar.length}</SayiGosterge>
                    KAYNAK KURUM
            </Card>

    )
}

export default memo(KaynakKurum)