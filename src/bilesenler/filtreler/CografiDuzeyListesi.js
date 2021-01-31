import React, { memo } from 'react'
import { referanslarState, seciliCografiDuzeylerState } from '../store'
import { useRecoilValue, useRecoilState } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'

function CografiDuzeyListesi(){
    const referanslar = useRecoilValue(referanslarState)
    const [seciliCografiDuzey, setSecilenCografiDuzeyler] = useRecoilState(seciliCografiDuzeylerState)

    const handleChange = selectedOptions =>{
      if(selectedOptions !== null) setSecilenCografiDuzeyler(selectedOptions);
      else setSecilenCografiDuzeyler([])
    }
    const cografiDuzeyler = referanslar.COGRAFI_DUZEY && referanslar.COGRAFI_DUZEY.map(c => ( {
        label:c.adi , value:c.id
    }))
    return(
        <Filtre title={"Coğrafi Düzey"} secili={seciliCografiDuzey.length !== 0 && seciliCografiDuzey}>
            <Select
              closeMenuOnSelect={false}
              placeholder='...'
              value={seciliCografiDuzey}
              isMulti
              options={cografiDuzeyler}
              onChange={handleChange}
            />
        </Filtre>
    )

}
export default memo(CografiDuzeyListesi)