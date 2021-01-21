import React, { memo, useCallback } from 'react'
import {useSetRecoilState } from 'recoil'
import { seciliBultenState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliBultenler from '../listeler/hook/useFiltreliBultenler'

function HaberBulteniListesi(props){
    const {filtreliUrunler} = props
    const filtreliBultenler = useFiltreliBultenler(filtreliUrunler)
    const setSeciliBulten = useSetRecoilState(seciliBultenState)


    const bultenlerOption = filtreliBultenler.map(b => ({label:b.adi, value:b.id }))
    const handleChange = useCallback((selectedOption) => {
        setSeciliBulten(selectedOption)
    }, [setSeciliBulten])

    return(
        <Filtre etiket={filtreliBultenler && filtreliBultenler.length}>
            <Select
              isClearable={true}
              placeholder='Haber Bültenleri'
              options={bultenlerOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}

export default memo(HaberBulteniListesi)