import styled from 'styled-components'
import { Card, Colors, H5, Menu } from '@blueprintjs/core'
import React, { Fragment } from 'react'
import { AnaRenkler } from '@tuik/renkler'
import ReactList from 'react-list'

const SayiGosterge = styled.div`
  color: rgb(15, 153, 96);
  display: inline-block;
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 4px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`
const SolaYasli = styled(H5)`
  color: ${AnaRenkler.koyuKirmizi};
  flex: 1;
  margin-bottom: 0;
`
const ToplamSayi = styled.div`
  display: inline-block;
  color: rgb(194, 48, 48);
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 4px;
`

const ListeBaslik = styled.div`
  display: flex;
  align-items: start;
  padding: 8px 16px;
`
const Ayrac = styled.div`
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  color: ${Colors.GRAY3};
  vertical-align: text-top;
`
const Kart = styled(Card)`
  padding: 0;
  max-width: ${props => (props.lg.matches && '20vw') || (props.md.matches && '20vw') || (props.sm.matches && '20vw') || (props.xs.matches && '20vw')};
  width: ${props => (props.lg.matches && '20vw') || (props.md.matches && '20vw') || (props.sm.matches && '20vw') || (props.xs.matches && '20vw')};
`
const ListeGovde = styled.div`
  padding: 0;

`
const SagaYasli = styled.div`

`
const Liste = styled(Menu)`
  height: 180px;
  overflow-y: auto;
`

export default function Gosterge (props) {
  const xs = window.matchMedia('(min-width: 768px)')
  const sm = window.matchMedia('(min-width: 960px)')
  const md = window.matchMedia('(min-width: 1280px)')
  const lg = window.matchMedia('(min-width: 1600px)')

  if (props.filtreli.length === 0) return null
  return (
    <Kart xs={xs} sm={sm} md={md} lg={lg}>
      <ListeBaslik>
        <SolaYasli>{props.title}</SolaYasli>
        <SagaYasli>
          <SayiGosterge style={{ color: Colors.ORANGE3 }}>{props.filtreli.length}</SayiGosterge>
          {props.toplam.length !== props.filtreli.length && (
            <Fragment>
              <Ayrac>/</Ayrac>
              <ToplamSayi>{props.toplam.length}</ToplamSayi>
            </Fragment>
          )}
        </SagaYasli>
      </ListeBaslik>
      <ListeGovde>
        <Liste>
          <ReactList
            type='uniform'
            minSize={30}
            pageSize={20}
            itemRenderer={props.itemRenderer}
            length={props.length}
          />
        </Liste>
      </ListeGovde>
    </Kart>
  )
}
