import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliKuruluslar } from '../store/selectors'
import Gosterge from './Gosterge'

function Kurulus (props) {
  const kuruluslar = useRecoilValue(siraliKuruluslar)

  return (
    <Gosterge
      toplam={kuruluslar}
      filtreli={props.filtreliKuruluslar}
      filtreliText="Ürünlerin İçerdiği"
      toplamText="Toplam"
      baslik="Paylaşılan Kuruluş"
    />
  )

}

export default memo(Kurulus)