import React, { memo, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliKurumlar } from '../store/selectors'
import { seciliKaynakKurumState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'

function KaynakKurumListesi (){
    const kurumlar = useRecoilValue(siraliKurumlar)
    const setSeciliKaynakKurum = useSetRecoilState(seciliKaynakKurumState)

    const kurumlarOption = kurumlar.map(k => ({label:k.adi, value:k.id}))

    const handleChange = useCallback(selectedOption => {
        setSeciliKaynakKurum(selectedOption)
    } , [setSeciliKaynakKurum])
    return(
        <Filtre etiket={kurumlar && kurumlar.length}>
            <Select
              placeholder='Kaynak Kurum'
              options={kurumlarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(KaynakKurumListesi)