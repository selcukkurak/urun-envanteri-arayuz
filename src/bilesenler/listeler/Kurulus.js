import React, {memo} from "react";
import {useRecoilValue} from "recoil";
import {siraliKuruluslar} from "../store/selectors";
import {SayiGosterge} from "./Liste";
import {Card} from "@blueprintjs/core";


function Kurulus (props) {
    const kuruluslar = useRecoilValue(siraliKuruluslar)


    return(
        <Card style={{textAlign:"justify", marginTop:"5%"}}>
                <SayiGosterge>{props.filtreliKuruluslar.length}</SayiGosterge>
                /
                <SayiGosterge>{kuruluslar.length}</SayiGosterge>
                PAYLAŞILAN KURULUŞ
        </Card>

    )

}
export default memo(Kurulus)