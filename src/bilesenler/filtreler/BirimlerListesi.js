import React, {memo, useCallback} from 'react'
import { seciliBirimlerState } from '../store'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { siraliUrunDaireleri } from '../store/selectors'
import Select from 'react-select';
import {FiltreGosterge} from "./CografiDuzeyListesi";


function BirimlerListesi () {
    const setSeciliBirimler = useSetRecoilState(seciliBirimlerState)
    const daireler = useRecoilValue(siraliUrunDaireleri)

    const handleChange = useCallback((selectedOption) => {
        setSeciliBirimler(selectedOption)
    }, [setSeciliBirimler])
    const optionDaireler = daireler.map(birim => ({label:birim.adi, value:birim.id}))
    return (
        <div style={{clear:"both"}}>
            <Select
                placeholder={(<div>Üretici Birimler <FiltreGosterge>{daireler && daireler.length}</FiltreGosterge></div>)}
                isMulti
                options={optionDaireler}
                onChange={handleChange}
            />
        </div>

    )
}

export default memo(BirimlerListesi)
