import React, { memo, useCallback } from 'react'
import Select from 'react-select'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { siraliAnketler } from '../store/selectors'
import { seciliAnketState } from '../store'
import Filtre from './Filtre'

function AnketlerListesi() {
    const anketler = useRecoilValue(siraliAnketler)
    const setSeciliAnket = useSetRecoilState(seciliAnketState)


    const anketlerOption = anketler.map(anket => ({label:anket.adi, value:anket.id}))
    const handleChange = useCallback((selectedOption) => {
        setSeciliAnket(selectedOption)
    }, [setSeciliAnket])
    return(
        <Filtre etiket={anketler && anketler.length}>
            <Select
              isClearable={true}
              className="basic-single"
              classNamePrefix="select"
              placeholder='Anketler'
              options={anketlerOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(AnketlerListesi)