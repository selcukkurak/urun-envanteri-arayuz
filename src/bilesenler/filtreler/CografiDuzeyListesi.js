import React, { memo } from 'react'
import { referanslarState, seciliCografiDuzeylerState } from '../store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'

function CografiDuzeyListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const setSecilenCografiDuzeyler = useSetRecoilState(seciliCografiDuzeylerState)

    const handleChange = selectedOptions => setSecilenCografiDuzeyler(selectedOptions);
    const cografiDuzeyler = referanslar.COGRAFI_DUZEY && referanslar.COGRAFI_DUZEY.map(c => ( {
        label:c.adi , value:c.id
    }))
    return(
        <Filtre>
            <Select
              closeMenuOnSelect={false}
              placeholder='Coğrafi Düzey'
              isMulti
              options={cografiDuzeyler}
              onChange={handleChange}
            />
        </Filtre>
    )

}
export default memo(CografiDuzeyListesi)