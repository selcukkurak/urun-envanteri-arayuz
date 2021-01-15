import React, {memo, useCallback} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil/dist";
import {siraliKurumlar} from "../store/selectors";
import {seciliKaynakKurumState} from "../store";
import {FiltreGosterge} from "./CografiDuzeyListesi";
import Select from "react-select";


function KaynakKurumListesi (){
    const kurumlar = useRecoilValue(siraliKurumlar)
    const setSeciliKaynakKurum = useSetRecoilState(seciliKaynakKurumState)

    const kurumlarOption = kurumlar.map(k => ({label:k.adi, value:k.id}))

    const handleChange = useCallback(selectedOption => {
        setSeciliKaynakKurum(selectedOption)
    } , [setSeciliKaynakKurum])
    return(
        <Select
            placeholder={(<div>Kaynak Kurum <FiltreGosterge>{kurumlar && kurumlar.length}</FiltreGosterge></div>)}
            options={kurumlarOption}
            onChange={handleChange}
        />
    )
}
export default memo(KaynakKurumListesi)