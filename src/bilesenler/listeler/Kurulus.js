import React, { memo } from 'react'
import Gosterge from './Gosterge'
import { MenuItem } from '@blueprintjs/core'

function Kurulus (props) {

  return (
    <Gosterge
      title={"Paylaşılan Kuruluş"}
      filtreli={props.filtreliKuruluslar}
      length={props.filtreliKuruluslar.length}
      itemRenderer={(index, key) => {
        const kurulus = props.filtreliKuruluslar[index]
        return (
          <MenuItem
            key={key}
            text={kurulus.adi}
          />
        )
      }}
    />
  )

}

export default memo(Kurulus)