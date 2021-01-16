import React, { memo } from 'react'
import styled from 'styled-components'
import { Button, Card, Colors, H5, Menu } from '@blueprintjs/core'
import ReactList from 'react-list'
import { AnaRenkler, BaslikRenkleri } from '@tuik/renkler'

const ListeBaslik = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
`

const SolaYasli = styled(H5)`
  color: ${BaslikRenkleri.gri};
  flex: 1;
  margin-bottom: 0;
`

const SagaYasli = styled.div`
  
`

const BaslikMetin = styled.div`
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  color: ${Colors.GRAY3};
  margin-right: 8px;
`

const Ayrac = styled.div`
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  color: ${Colors.GRAY3};
  vertical-align: text-top;
`

const UrunListesi = styled(Menu)`
  padding: 0;
  height: 500px;
  overflow: auto;
`
export const SayiGosterge = styled.div`
  display: inline-block;
  color: ${AnaRenkler.koyuKirmizi};
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 4px;
  margin-right: 8px;
  
  &:last-child {
    margin-right: 0;
  }
`

function Liste (props) {
  console.log(props)
  return (
    <div>
      <ListeBaslik>
        <SolaYasli>{props.title}</SolaYasli>
        <SagaYasli>
          <BaslikMetin>TOPLAM</BaslikMetin>
          <SayiGosterge>{props.filtreliUrunler && props.filtreliUrunler.length}</SayiGosterge>
          <Ayrac>/</Ayrac>
          <SayiGosterge>{props.urunler && props.urunler.length}</SayiGosterge>
        </SagaYasli>
      </ListeBaslik>
      <Card>
        <UrunListesi>
          <ReactList
            type='variable'
            itemRenderer={props.itemRenderer}
            length={props.length}/>
        </UrunListesi>
      </Card>
    </div>

  )
}

export default memo(Liste)