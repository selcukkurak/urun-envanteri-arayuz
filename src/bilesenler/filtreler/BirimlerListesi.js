import React, { memo, useCallback } from 'react'
import { seciliBirimlerState } from '../store'
import { useSetRecoilState } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliBirimler from '../listeler/hook/useFiltreliBirimler'

function BirimlerListesi (props) {
  const { filtreliUrunler } = props
  const setSeciliBirimler = useSetRecoilState(seciliBirimlerState)
  const filtreliDaireler = useFiltreliBirimler(filtreliUrunler)

  const handleChange = useCallback((selectedOption) => {
    if (selectedOption !== null) {
      setSeciliBirimler(selectedOption.map(a => a.value))
    } else setSeciliBirimler([])
  }, [setSeciliBirimler])
  const optionDaireler = filtreliDaireler.map(birim => ({ label: birim.adi, value: birim.id }))
  return (
    <Filtre etiket={filtreliDaireler && filtreliDaireler.length}>
      <Select
        placeholder='Üretici Birimler'
        isMulti
        options={optionDaireler}
        onChange={handleChange}
      />
    </Filtre>

  )
}

export default memo(BirimlerListesi)
