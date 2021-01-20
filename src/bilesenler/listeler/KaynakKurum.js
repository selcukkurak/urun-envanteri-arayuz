import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliKurumlar } from '../store/selectors'
import Gosterge from './Gosterge'

function KaynakKurum (props) {
  const kaynakKurumlar = useRecoilValue(siraliKurumlar)

  return (
    <Gosterge
      toplam={kaynakKurumlar}
      filtreli={props.filtreliKurumlar}
      filtreliText="Ürünlerin İçerdiği"
      toplamText="Toplam"
      baslik="Kaynak Kurum"
    />

  )
}

export default memo(KaynakKurum)