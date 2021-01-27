import React, { memo, useCallback } from 'react'
import { referanslarState, seciliUretimSikliklariState } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'

function UretimSikligiListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const  [secili, setSecilenUretimSikliklar] = useRecoilState(seciliUretimSikliklariState)

    const handleChange = useCallback(selectedOption => {
      if (selectedOption !== null) setSecilenUretimSikliklar(selectedOption)
      else setSecilenUretimSikliklar([])
        }, [setSecilenUretimSikliklar])


    const periyotlar = referanslar.PERIYOT && referanslar.PERIYOT.map(p => ({label:p.adi, value:p.id}))
    return(
        <Filtre title={"Üretim Sıklığı"} secili={secili.length !== 0 && secili}>
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