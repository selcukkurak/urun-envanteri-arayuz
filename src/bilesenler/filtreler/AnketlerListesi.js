import React, { memo, useCallback } from 'react'
import Select from 'react-select'
import {useSetRecoilState } from 'recoil'
import { seciliAnketState } from '../store'
import Filtre from './Filtre'
import useFiltreliAnketler from '../listeler/hook/useFiltreliAnketler'

function AnketlerListesi(props) {
    const {filtreliUrunler} = props
    const filtreliAnketler = useFiltreliAnketler(filtreliUrunler)
    const setSeciliAnket = useSetRecoilState(seciliAnketState)


    const anketlerOption = filtreliAnketler.map(anket => ({label:anket.adi, value:anket.id}))
    const handleChange = useCallback((selectedOption) => {
        setSeciliAnket(selectedOption)
    }, [setSeciliAnket])
    return(
        <Filtre etiket={filtreliAnketler && filtreliAnketler.length}>
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