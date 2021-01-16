import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { seciliUrunDetay, siraliAnketler } from '../store/selectors'
import { SayiGosterge } from './Liste'
import { Card } from '@blueprintjs/core'

function Anket (props) {
  const anketler = useRecoilValue(siraliAnketler)
  const urun = useRecoilValue(seciliUrunDetay)
  return (
    <Card>
      <SayiGosterge>{urun ? urun.anketler.length : 0}</SayiGosterge>
      /
      <SayiGosterge>{anketler.length}</SayiGosterge>
      ANKET
    </Card>

  )

}

export default memo(Anket)