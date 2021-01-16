import React, { memo, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliIdariKayitlar } from '../store/selectors'
import { seciliIdariKayitState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'

function IdariKayitlarListesi () {
    const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
    const setSeciliIdariKayit = useSetRecoilState(seciliIdariKayitState)

    console.debug(idariKayitlar)

    const idariKayitlarOption = idariKayitlar.map(idari => ({label:idari.adi, value:idari.id}))
    const handleChange = useCallback(selectedOption => {
        setSeciliIdariKayit(selectedOption)
    }, [setSeciliIdariKayit])
    return (
        <Filtre etiket={idariKayitlar && idariKayitlar.length}>
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