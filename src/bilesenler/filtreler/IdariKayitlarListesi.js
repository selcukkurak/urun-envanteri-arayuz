import React, { memo, useCallback } from 'react'
import { seciliIdariKayitState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliIdariKayitlar from '../listeler/hook/useFiltreliIdariKayitlar'
import { useRecoilState } from 'recoil'
import { localSort } from '../util/sort'

function IdariKayitlarListesi (props) {
    const {filtreliUrunler} = props
    const filtreliIdariKayitlar = localSort(useFiltreliIdariKayitlar(filtreliUrunler), 'adi')
    const [seciliIdariKayit, setSeciliIdariKayit] = useRecoilState(seciliIdariKayitState)

    console.debug(filtreliIdariKayitlar)

    const idariKayitlarOption = filtreliIdariKayitlar.map(idari => ({label:idari.adi, value:idari.id}))
    const handleChange = useCallback(selectedOption => {
        setSeciliIdariKayit(selectedOption)
    }, [setSeciliIdariKayit])
    return (
        <Filtre etiket={filtreliIdariKayitlar && filtreliIdariKayitlar.length} secili={seciliIdariKayit} title={"İdari Kayıt"}>
            <Select
              isClearable={true}
              value={seciliIdariKayit}
              placeholder='İdari Kayıtlar'
              options={idariKayitlarOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(IdariKayitlarListesi)