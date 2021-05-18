import styled from 'styled-components'
import { Card, H5, Menu } from '@blueprintjs/core'
import React from 'react'
import { AnaRenkler } from '@tuik/renkler'
import ReactList from 'react-list'


const SolaYasli = styled(H5)`
  color: ${AnaRenkler.koyuKirmizi};
  flex: 1;
  margin-bottom: 0;
`
const Sayi = styled.div`
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
          <Sayi>{props.filtreli.length}</Sayi>
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
