import React, { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { seciliIdariKayitState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliIdariKayitlar from '../listeler/hook/useFiltreliIdariKayitlar'

function IdariKayitlarListesi (props) {
    const {filtreliUrunler} = props
    const filtreliIdariKayitlar = useFiltreliIdariKayitlar(filtreliUrunler)
    const setSeciliIdariKayit = useSetRecoilState(seciliIdariKayitState)

    console.debug(filtreliIdariKayitlar)

    const idariKayitlarOption = filtreliIdariKayitlar.map(idari => ({label:idari.adi, value:idari.id}))
    const handleChange = useCallback(selectedOption => {
        setSeciliIdariKayit(selectedOption)
    }, [setSeciliIdariKayit])
    return (
        <Filtre etiket={filtreliIdariKayitlar && filtreliIdariKayitlar.length}>
            <Select
              isClearable={true}
              placeholder='İdari Kayıtlar'
              options={idariKayitlarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(IdariKayitlarListesi)