import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { tekilBultenler } from '../store/selectors'
import Gosterge from './Gosterge'
import { MenuItem } from '@blueprintjs/core'
import BultenUrl from '../detaylar/BultenUrl'

function HaberBulteni (props) {
  const haberbultenleri = useRecoilValue(tekilBultenler)

  return (
    <Gosterge
      title={"Haber Bülteni"}
      toplam={haberbultenleri}
      filtreli={props.filtreliBultenler}
      length={props.filtreliBultenler.length}
      itemRenderer={(index, key) => {
        const bulten = props.filtreliBultenler[index]
        return(
            <MenuItem
              key={key}
              text={(<BultenUrl bulten={bulten}/>)}
            />
        )
      }}
    />
  )

}

export default memo(HaberBulteni)