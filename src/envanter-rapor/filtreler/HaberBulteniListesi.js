import React, {memo, useCallback} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil/dist";
import {tekilBultenler} from "../store/selectors";
import {seciliBultenState} from "../store";
import {FiltreGosterge} from "./CografiDuzeyListesi";
import Select from "react-select";


function HaberBulteniListesi(){
    const bultenler = useRecoilValue(tekilBultenler)
    const setSeciliBulten = useSetRecoilState(seciliBultenState)

    const bultenlerOption = bultenler.map(b => ({label:b.adi, value:b.id }))
    const handleChange = useCallback((selectedOption) => {
        setSeciliBulten(selectedOption)
    }, [setSeciliBulten])

    return(
        <Select
            placeholder={(<div>Haber Bültenleri <FiltreGosterge>{bultenler && bultenler.length}</FiltreGosterge> </div>)}
            options={bultenlerOption}
            onChange={handleChange}
        />
    )
}

export default memo(HaberBulteniListesi)