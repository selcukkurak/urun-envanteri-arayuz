import React, { memo, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliKuruluslar } from '../store/selectors'
import { seciliKaynakKurulusState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'

function KurulusListesi (){
    const kuruluslar = useRecoilValue(siraliKuruluslar)
    const setSeciliKurulus = useSetRecoilState(seciliKaynakKurulusState)

    const kuruluslarOption = kuruluslar.map(k => ({label:k.adi, value:k.id}))
    const handleChange = useCallback(selectionOption => {
        setSeciliKurulus(selectionOption)
    }, [setSeciliKurulus])
    return(
        <Filtre etiket={kuruluslar && kuruluslar.length}>
            <Select
              placeholder='Paylaşılan Kuruluş'
              options={kuruluslarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(KurulusListesi)