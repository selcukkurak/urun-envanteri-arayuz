import React, {memo} from "react";
import {useRecoilValue} from "recoil/dist";
import {tekilBultenler} from "../store/selectors";
import {SayiGosterge} from "./Liste";
import {Card} from "@blueprintjs/core";

function HaberBulteni (props) {
    const haberbultenleri = useRecoilValue(tekilBultenler)

    return (
        <Card style={{textAlign:"justify", marginTop:"5%"}}>
                <SayiGosterge>{props.filtreliBultenler ? props.filtreliBultenler.length : 0}</SayiGosterge>
                /
                <SayiGosterge>{haberbultenleri.length}</SayiGosterge>
                HABER BÜLTENİ
        </Card>
    )

}

export default memo(HaberBulteni)