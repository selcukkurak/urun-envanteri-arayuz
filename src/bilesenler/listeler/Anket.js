import React, { memo } from 'react'
import Gosterge from './Gosterge'
import useFiltreliAnketler from './hook/useFiltreliAnketler'
import { MenuItem } from '@blueprintjs/core'
import { localSort } from '../util/sort'
import handleModal from '../detaylar/handleModal'
import AnketDetayDialog from '../detaylar/AnketDetayDialog'

function Anket (props) {
  const filtreliAnketler = localSort(useFiltreliAnketler(props.filteriUrunler), 'adi')
  const [selectedItem, setSelectedItem] = React.useState(null)
  const [
    open,
    handleClickOpenModal,
    handleClickCloseModal
  ] = handleModal();

  const handleClickItem = (event,index) => {
    setSelectedItem(index);
  }

  return (
    <div>
      <Gosterge
        title={"Anket"}
        filtreli={filtreliAnketler}
        length={filtreliAnketler.length}
        itemRenderer={(index, key) => {
          const anket = filtreliAnketler[index]
          return (
            <div onClick={(event) => handleClickItem(event, anket)}>
              <MenuItem
                key={key}
                text={anket.adi}
                onClick={handleClickOpenModal}
              />
            </div>
          )
        }}
      />
      <AnketDetayDialog anket={selectedItem} open={open} handleClickCloseModal={handleClickCloseModal}/>
    </div>


  )
}

export default memo(Anket)