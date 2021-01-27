import React, { memo, useCallback } from 'react'
import {useRecoilState } from 'recoil'
import { seciliKaynakKurulusState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliKuruluslar from '../listeler/hook/useFiltreliKuruluslar'

function KurulusListesi (props){
    const {filtreliUrunler} = props
    const filtreliKuruluslar = useFiltreliKuruluslar(filtreliUrunler)
    const [seciliKurulus,setSeciliKurulus] = useRecoilState(seciliKaynakKurulusState)

    const kuruluslarOption = filtreliKuruluslar.map(k => ({label:k.adi, value:k.id}))
    const handleChange = useCallback(selectionOption => {
        setSeciliKurulus(selectionOption)
    }, [setSeciliKurulus])
    return(
        <Filtre etiket={filtreliKuruluslar && filtreliKuruluslar.length} secili={seciliKurulus} title={"Paylaşılan Kuruluş"}>
            <Select
              isClearable={true}
              placeholder='Paylaşılan Kuruluş'
              value={seciliKurulus}
              options={kuruluslarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(KurulusListesi)