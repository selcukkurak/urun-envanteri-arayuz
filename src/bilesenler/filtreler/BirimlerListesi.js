import React, { memo, useCallback } from 'react'
import { seciliBirimlerState } from '../store'
import { useRecoilState } from 'recoil'
import Select from 'react-select'
import Filtre from './Filtre'
import useFiltreliBirimler from '../listeler/hook/useFiltreliBirimler'

function BirimlerListesi (props) {
  const { filtreliUrunler } = props
  const [seciliBirimler, setSeciliBirimler] = useRecoilState(seciliBirimlerState)
  const filtreliDaireler = useFiltreliBirimler(filtreliUrunler)

  const handleChange = useCallback((selectedOption) => {
    if (selectedOption !== null) {
      setSeciliBirimler(selectedOption.map(a => a.value))
    } else setSeciliBirimler([])
  }, [setSeciliBirimler])
  const optionDaireler = filtreliDaireler.map(birim => ({ label: birim.adi, value: birim.id }))
  return (
    <Filtre etiket={filtreliDaireler && filtreliDaireler.length} title="Üretici Birim" secili={seciliBirimler.length !== 0 && seciliBirimler} >
      <Select
        placeholder='Üretici Birimler'
        isMulti
        value={seciliBirimler}
        options={optionDaireler}
        onChange={handleChange}
      />
    </Filtre>

  )
}

export default memo(BirimlerListesi)
