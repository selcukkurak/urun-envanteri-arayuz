import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliKuruluslar } from '../store/selectors'
import Gosterge from './Gosterge'
import { MenuItem } from '@blueprintjs/core'

function Kurulus (props) {
  const kuruluslar = useRecoilValue(siraliKuruluslar)

  return (
    <Gosterge
      title={"Paylaşılan Kuruluş"}
      toplam={kuruluslar}
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