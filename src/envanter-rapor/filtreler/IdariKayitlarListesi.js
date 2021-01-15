import React, {memo, useCallback} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil/dist";
import {siraliIdariKayitlar} from "../store/selectors";
import {seciliIdariKayitState} from "../store";
import Select from "react-select";
import {FiltreGosterge} from "./CografiDuzeyListesi";


function IdariKayitlarListesi () {
    const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
    const setSeciliIdariKayit = useSetRecoilState(seciliIdariKayitState)

    console.log(idariKayitlar)

    const idariKayitlarOption = idariKayitlar.map(idari => ({label:idari.adi, value:idari.id}))
    const handleChange = useCallback(selectedOption => {
        setSeciliIdariKayit(selectedOption)
    }, [setSeciliIdariKayit])
    return (
        <Select
            placeholder={(<div>İdari Kayıtlar <FiltreGosterge>{idariKayitlar && idariKayitlar.length}</FiltreGosterge></div>)}
            options={idariKayitlarOption}
            onChange={handleChange}
        />
    )
}
export default memo(IdariKayitlarListesi)