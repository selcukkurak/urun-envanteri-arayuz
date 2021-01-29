import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliIdariKayitlar } from '../store/selectors'
import Gosterge from './Gosterge'
import useFiltreliIdariKayitlar from './hook/useFiltreliIdariKayitlar'
import { MenuItem } from '@blueprintjs/core'
import IdariKayitDialog from '../detaylar/IdariKayitDialog'
import { localSort } from '../util/sort'
import handleModal  from '../detaylar/handleModal'

function IdariKayit (props) {
  const idariKayitlar = useRecoilValue(siraliIdariKayitlar)
  const filtreliIdariKayitlar = localSort(useFiltreliIdariKayitlar(props.filtreliUrunler), 'adi')
  const [selectedItem, setSelectedItem] = React.useState(null)

  const [
    open,
    handleClickOpenModal,
    handleClickCloseModal
  ] = handleModal()

  const handleClickItem = (event,index) => {
    setSelectedItem(index);
  }
  return (
    <div>
      <Gosterge
        title={"İdari Kayıt"}
        toplam={idariKayitlar}
        filtreli={filtreliIdariKayitlar}
        length={filtreliIdariKayitlar.length}
        itemRenderer={(index, key) => {
          const idariKayit = filtreliIdariKayitlar[index]
          return (
            <div onClick={(event) => handleClickItem(event, idariKayit)}>
              <MenuItem
                key={key}
                text={idariKayit.adi}
                onClick={handleClickOpenModal}
              />
            </div>
          )
        }}
      />
      <IdariKayitDialog idariKayit={selectedItem} open={open} handleClickCloseModal={handleClickCloseModal}/>
    </div>
  )
}

export default memo(IdariKayit)