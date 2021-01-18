import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliIdariKayitlar } from '../store/selectors'
import Gosterge from './Gosterge'

function IdariKayit (props) {
  const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
  let toplam = 0;
  const idariKayitToplam = props.sayilar.map((sayi)=>toplam+=Number(sayi.idariKayit));

  return (
    <Gosterge
      toplam={idariKayitlar}
      filtreli={idariKayitToplam[idariKayitToplam.length-1]}
      filtreliText="Ürünlerin İçerdiği"
      toplamText="Toplam"
      baslik="İdari Kayıt"
    />

  )
}

export default memo(IdariKayit)