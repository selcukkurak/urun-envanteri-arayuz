import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import { Card, Colors, H5, Menu } from '@blueprintjs/core'
import ReactList from 'react-list'

const ListeBaslik = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
`

const SolaYasli = styled(H5)`
  color: darkred;
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
const ToplamSayi = styled.div`
  display: inline-block;
  color: ${Colors.GRAY3};
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 4px;
`
const SayiGosterge = styled.div`
  display: inline-block;
  color: darkred;
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 4px;
  margin-right: 8px;
  
  &:last-child {
    margin-right: 0;
  }
`

const ListeGovde = styled(Card)`
  padding: 0;
`

const UrunListesi = styled(Menu)`
  height: 640px;
  overflow-y: auto;
`

function Liste (props) {
  const {
    urunler = [],
    filtreliUrunler = []
  } = props

  return (
    <div>
      <ListeBaslik>
        <SolaYasli>{props.title}</SolaYasli>
        <SagaYasli>
          <BaslikMetin>TOPLAM</BaslikMetin>
          <SayiGosterge>{filtreliUrunler.length}</SayiGosterge>
          {urunler.length !== filtreliUrunler.length && (
            <Fragment>
              <Ayrac>/</Ayrac>
              <ToplamSayi>{urunler.length}</ToplamSayi>
            </Fragment>
          )}
        </SagaYasli>
      </ListeBaslik>
      <ListeGovde>
        <UrunListesi>
          <ReactList
            type='uniform'
            minSize={30}
            pageSize={20}
            itemRenderer={props.itemRenderer}
            length={props.length}/>
        </UrunListesi>
      </ListeGovde>
    </div>

  )
}

export default memo(Liste)