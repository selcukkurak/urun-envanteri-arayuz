import React, { memo, useCallback } from 'react'
import {useSetRecoilState} from 'recoil'
import { seciliKaynakKurumState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliKurumlar from '../listeler/hook/useFiltreliKurumlar'

function KaynakKurumListesi (props){
  const {filtreliUrunler} = props
    const filtreliKurumlar = useFiltreliKurumlar(filtreliUrunler)
    const setSeciliKaynakKurum = useSetRecoilState(seciliKaynakKurumState)

    const kurumlarOption = filtreliKurumlar.map(k => ({label:k.adi, value:k.kodu}))

    const handleChange = useCallback(selectedOption => {
        setSeciliKaynakKurum(selectedOption)
    } , [setSeciliKaynakKurum])
    return(
        <Filtre etiket={filtreliKurumlar && filtreliKurumlar.length}>
            <Select
              isClearable={true}
              placeholder='Kaynak Kurum'
              options={kurumlarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(KaynakKurumListesi)