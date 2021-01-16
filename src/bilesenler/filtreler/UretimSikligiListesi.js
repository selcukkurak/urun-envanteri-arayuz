import React, { memo, useCallback } from 'react'
import { referanslarState, seciliUretimSikliklariState } from '../store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'

function UretimSikligiListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const setSecilenUretimSikliklar = useSetRecoilState(seciliUretimSikliklariState)

    const handleChange = useCallback(selectedOption => {
        setSecilenUretimSikliklar(selectedOption)
        }, [setSecilenUretimSikliklar])


    const periyotlar = referanslar.PERIYOT && referanslar.PERIYOT.map(p => ({label:p.adi, value:p.id}))
    return(
        <Filtre>
            <Select
              closeMenuOnSelect={false}
              placeholder='Üretim Sıklığı'
              isMulti
              options={periyotlar}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(UretimSikligiListesi)