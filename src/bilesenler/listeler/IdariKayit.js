import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliIdariKayitlar } from '../store/selectors'
import Gosterge from './Gosterge'
import useFiltreliIdariKayitlar from './hook/useFiltreliIdariKayitlar'
import { MenuItem } from '@blueprintjs/core'
import IdariKayitDialog from '../detaylar/IdariKayitDialog'

function IdariKayit (props) {
  const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
  const filtreliIdariKayitlar = useFiltreliIdariKayitlar(props.filtreliUrunler)
  return (
    <Gosterge
      title={"İdari Kayıt"}
      toplam={idariKayitlar}
      filtreli={filtreliIdariKayitlar}
      length={filtreliIdariKayitlar.length}
      itemRenderer={(index, key) => {
        const idariKayit = filtreliIdariKayitlar[index]
        return (
          <MenuItem
            key={key}
            text={(<IdariKayitDialog idariKayit={idariKayit}/>)}
          />
        )
      }}
    />

  )
}

export default memo(IdariKayit)