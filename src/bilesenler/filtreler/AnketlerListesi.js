import React, { memo, useCallback } from 'react'
import Select from 'react-select'
import {useRecoilState } from 'recoil'
import { seciliAnketState } from '../store'
import Filtre from './Filtre'
import useFiltreliAnketler from '../listeler/hook/useFiltreliAnketler'
import { localSort } from '../util/sort'

function AnketlerListesi(props) {
    const {filtreliUrunler} = props
    const filtreliAnketler = localSort(useFiltreliAnketler(filtreliUrunler), 'adi')
    const [seciliAnket, setSeciliAnket] = useRecoilState(seciliAnketState)

    const anketlerOption = filtreliAnketler.map(anket => ({label:anket.adi, value:anket.id}))

    const handleChange = useCallback((selectedOption) => {
        setSeciliAnket(selectedOption)
    }, [setSeciliAnket])
    return(
        <Filtre etiket={filtreliAnketler && filtreliAnketler.length} title={"Anket"} secili={seciliAnket}>
            <Select
              isClearable={true}
              className="basic-single"
              classNamePrefix="select"
              placeholder='Anketler'
              value={seciliAnket}
              options={anketlerOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}
export default memo(AnketlerListesi)