import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliIdariKayitlar } from '../store/selectors'
import Gosterge from './Gosterge'
import useFiltreliIdariKayitlar from './hook/useFiltreliIdariKayitlar'

function IdariKayit (props) {
  const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
  const filtreliIdariKayitlar = useFiltreliIdariKayitlar(props.filtreliUrunler)

  return (
    <Gosterge
      toplam={idariKayitlar}
      filtreli={filtreliIdariKayitlar}
      baslik="İdari Kayıt"
    />

  )
}

export default memo(IdariKayit)