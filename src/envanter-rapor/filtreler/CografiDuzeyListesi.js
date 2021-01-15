
import React, {memo} from "react";
import {referanslarState, seciliCografiDuzeylerState} from "../store";
import {useSetRecoilState, useRecoilValue} from "recoil/dist";
import Select from 'react-select';
import styled from "styled-components";
import {AnaRenkler} from "@tuik/renkler";
import {Tag} from "@blueprintjs/core";

export const FiltreGosterge = styled(Tag)`
  display: inline-block;
  font-size: 1.2em;
  color: ${AnaRenkler.beyaz};
  padding-left: 0;
`
function CografiDuzeyListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const setSecilenCografiDuzeyler = useSetRecoilState(seciliCografiDuzeylerState)

    const handleChange = selectedOptions => setSecilenCografiDuzeyler(selectedOptions);
    const cografiDuzeyler = referanslar.COGRAFI_DUZEY && referanslar.COGRAFI_DUZEY.map(c => ( {
        label:c.adi , value:c.id
    }))
    return(
        <div>
            <Select
                closeMenuOnSelect={false}
                placeholder={<div>Coğrafi Düzey <FiltreGosterge>{cografiDuzeyler && cografiDuzeyler.length}</FiltreGosterge></div>}
                isMulti
                options={cografiDuzeyler}
                onChange={handleChange}
            />
        </div>
    )

}
export default memo(CografiDuzeyListesi)