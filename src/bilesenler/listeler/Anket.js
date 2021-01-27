import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliAnketler } from '../store/selectors'
import Gosterge from './Gosterge'
import useFiltreliAnketler from './hook/useFiltreliAnketler'
import { MenuItem } from '@blueprintjs/core'
import AnketDetayDialog from '../detaylar/AnketDetayDialog'

function Anket (props) {
  const anketler = useRecoilValue(siraliAnketler)
  const filtreliAnketler = useFiltreliAnketler(props.filteriUrunler)
  return (
    <Gosterge
      title={"Anket"}
      toplam={anketler}
      filtreli={filtreliAnketler}
      length={filtreliAnketler.length}
      itemRenderer={(index, key) => {
        const anket = filtreliAnketler[index]
        return (
          <MenuItem
            key={key}
            text={(<AnketDetayDialog anket={anket}/>)}
          />
        )
      }}
    />

  )
}

export default memo(Anket)