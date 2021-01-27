import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliKurumlar } from '../store/selectors'
import Gosterge from './Gosterge'
import { MenuItem } from '@blueprintjs/core'

function KaynakKurum (props) {
  const kaynakKurumlar = useRecoilValue(siraliKurumlar)

  return (
    <Gosterge
      title={"Kaynak Kurum"}
      toplam={kaynakKurumlar}
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