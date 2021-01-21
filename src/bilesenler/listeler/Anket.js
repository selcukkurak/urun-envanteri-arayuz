import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliAnketler } from '../store/selectors'
import Gosterge from './Gosterge'
import useFiltreliAnketler from './hook/useFiltreliAnketler'

function Anket (props) {
  const anketler = useRecoilValue(siraliAnketler)
  const filtreliAnketler = useFiltreliAnketler(props.filteriUrunler)
  return (
    <Gosterge
      toplam={anketler}
      filtreli={filtreliAnketler}
      baslik="Anket"
    />

  )

}

export default memo(Anket)