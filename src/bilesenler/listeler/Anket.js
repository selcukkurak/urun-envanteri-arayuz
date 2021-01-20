import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliAnketler } from '../store/selectors'
import Gosterge from './Gosterge'

function Anket (props) {
  const anketler = useRecoilValue(siraliAnketler)
  let toplam = 0;
  const anketToplam = props.sayilar.map((sayi)=>toplam+=Number(sayi.anket));
  return (
    <Gosterge
      toplam={anketler}
      filtreli={anketToplam[anketToplam.length-1]}
      filtreliText="Ürünlerin İçerdiği"
      toplamText="Toplam"
      baslik="Anket"
    />

  )

}

export default memo(Anket)