import React, { memo, useCallback } from 'react'
import {useRecoilState } from 'recoil'
import { seciliBultenState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliBultenler from '../listeler/hook/useFiltreliBultenler'

function HaberBulteniListesi(props){
    const {filtreliUrunler} = props
    const filtreliBultenler = useFiltreliBultenler(filtreliUrunler)
    const [seciliBulten,setSeciliBulten] = useRecoilState(seciliBultenState)

    const bultenlerOption = filtreliBultenler.map(b => ({label:b.adi, value:b.id}))
    const handleChange = useCallback((selectedOption) => {
        setSeciliBulten(selectedOption)
    }, [setSeciliBulten])

    return(
        <Filtre etiket={filtreliBultenler && filtreliBultenler.length} title={"Haber Bülteni"} secili={seciliBulten}>
            <Select
              isClearable={true}
              value={seciliBulten}
              placeholder='...'
              options={bultenlerOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}

export default memo(HaberBulteniListesi)