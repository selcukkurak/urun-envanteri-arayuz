import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { seciliUrunDetay, siraliIdariKayitlar } from '../store/selectors'
import { SayiGosterge } from './Liste'
import { Card } from '@blueprintjs/core'

function IdariKayit (props) {
  const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
  const urun = useRecoilValue(seciliUrunDetay)

  return (
    <Card>
      <SayiGosterge>{urun ? urun.idariKayitlar.length : 0}</SayiGosterge>
      /
      <SayiGosterge>{idariKayitlar.length}</SayiGosterge>
      İDARİ KAYIT
    </Card>

  )
}

export default memo(IdariKayit)