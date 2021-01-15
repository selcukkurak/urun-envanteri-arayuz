import React, {memo, useCallback} from "react";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {siraliKuruluslar} from "../store/selectors";
import {seciliKaynakKurulusState} from "../store";
import {FiltreGosterge} from "./CografiDuzeyListesi";
import Select from "react-select";


function KurulusListesi (){
    const kuruluslar = useRecoilValue(siraliKuruluslar)
    const setSeciliKurulus = useSetRecoilState(seciliKaynakKurulusState)

    const kuruluslarOption = kuruluslar.map(k => ({label:k.adi, value:k.id}))
    const handleChange = useCallback(selectionOption => {
        setSeciliKurulus(selectionOption)
    }, [setSeciliKurulus])
    return(
        <Select
            placeholder={(<div>Paylaşılan Kuruluş <FiltreGosterge>{kuruluslar && kuruluslar.length}</FiltreGosterge></div>)}
            options={kuruluslarOption}
            onChange={handleChange}
        />
    )
}
export default memo(KurulusListesi)