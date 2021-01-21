import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { tekilBultenler } from '../store/selectors'
import Gosterge from './Gosterge'

function HaberBulteni (props) {
  const haberbultenleri = useRecoilValue(tekilBultenler)

  return (
    <Gosterge
      toplam={haberbultenleri}
      filtreli={props.filtreliBultenler}
      baslik="Haber Bülteni"
    />
  )

}

export default memo(HaberBulteni)