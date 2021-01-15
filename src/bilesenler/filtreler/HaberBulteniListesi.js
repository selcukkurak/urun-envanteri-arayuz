import React, { memo, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { tekilBultenler } from '../store/selectors'
import { seciliBultenState } from '../store'
import Select from 'react-select'
import Filtre from './Filtre'

function HaberBulteniListesi(){
    const bultenler = useRecoilValue(tekilBultenler)
    const setSeciliBulten = useSetRecoilState(seciliBultenState)

    const bultenlerOption = bultenler.map(b => ({label:b.adi, value:b.id }))
    const handleChange = useCallback((selectedOption) => {
        setSeciliBulten(selectedOption)
    }, [setSeciliBulten])

    return(
        <Filtre etiket={bultenler && bultenler.length}>
            <Select
              placeholder='Haber Bültenleri'
              options={bultenlerOption}
              onChange={handleChange}
            />
        </Filtre>
    )
}

export default memo(HaberBulteniListesi)