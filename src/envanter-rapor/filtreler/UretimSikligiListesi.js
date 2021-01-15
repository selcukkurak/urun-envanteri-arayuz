import React, {memo, useCallback} from "react";
import {referanslarState, seciliUretimSikliklariState} from "../store";
import {useRecoilValue, useSetRecoilState} from "recoil/dist";
import Select from "react-select";
import {FiltreGosterge} from "./CografiDuzeyListesi";


function UretimSikligiListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const setSecilenUretimSikliklar = useSetRecoilState(seciliUretimSikliklariState)

    const handleChange = useCallback(selectedOption => {
        setSecilenUretimSikliklar(selectedOption)
        }, [setSecilenUretimSikliklar])


    const periyotlar = referanslar.PERIYOT && referanslar.PERIYOT.map(p => ({label:p.adi, value:p.id}))
    return(
        <Select
            closeMenuOnSelect={false}
            placeholder={(<div>Üretim Sıklığı <FiltreGosterge>{periyotlar && periyotlar.length}</FiltreGosterge></div>)}
            isMulti
            options={periyotlar}
            onChange={handleChange}
        />
    )
}
export default memo(UretimSikligiListesi)