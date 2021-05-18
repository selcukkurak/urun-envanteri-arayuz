import React, { memo } from 'react'
import Gosterge from './Gosterge'
import { MenuItem } from '@blueprintjs/core'

function KaynakKurum (props) {

  return (
    <Gosterge
      title={"Kaynak Kurum"}
      filtreli={props.filtreliKurumlar}
      length={props.filtreliKurumlar.length}
      itemRenderer={(index, key) => {
        const kurum = props.filtreliKurumlar[index]
        return (
          <MenuItem
            key={key}
            text={kurum.adi}
          />
        )
      }}
    />

  )
}

export default memo(KaynakKurum)