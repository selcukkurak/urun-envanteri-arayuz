import React, { memo, useCallback } from 'react'
import { seciliBirimlerState } from '../store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliUrunDaireleri } from '../store/selectors'
import Select from 'react-select'
import Filtre from './Filtre'

function BirimlerListesi () {
    const setSeciliBirimler = useSetRecoilState(seciliBirimlerState)
    const daireler = useRecoilValue(siraliUrunDaireleri)

    const handleChange = useCallback((selectedOption) => {
        setSeciliBirimler(selectedOption)
    }, [setSeciliBirimler])
    const optionDaireler = daireler.map(birim => ({label:birim.adi, value:birim.id}))
    return (
        <Filtre etiket={daireler && daireler.length}>
            <Select
              placeholder='Üretici Birimler'
              isMulti
              options={optionDaireler}
              onChange={handleChange}
            />
        </Filtre>

    )
}

export default memo(BirimlerListesi)
