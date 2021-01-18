import styled from 'styled-components'
import { Card, H5 } from '@blueprintjs/core'
import React from 'react'

export const BaslikGosterge = styled(H5)`
  white-space: nowrap;
  font-size: 16px;
  color: rgb(138, 155, 168);
`
export const SayiGosterge = styled.div`
  display: block;
  color: rgb(194, 48, 48);
  font-size: 2em;
  font-weight: bold;
  
`
export const IcerikGosterge = styled.div`
  font-weight: bold;
  color: rgb(138, 155, 168);
  font-size: 12px;
`
export const GostergeDiv = styled.div`
  padding-top: 0px;
  display: flex;
  flex-direction: row;
`
export const IcerikDiv = styled.div`
  margin-right: 64px;
  flex: 1 1 0%;
`

export default function Gosterge(props){
  return(
    <Card style={{width:"200px", minWidth:"200px"}}>
      <BaslikGosterge>{props.baslik}</BaslikGosterge>
      <GostergeDiv>
        {props.toplam.length !== (Array.isArray(props.filtreli) ? props.filtreli.length : props.filtreli) && (
          <IcerikDiv>
            <SayiGosterge>{Array.isArray(props.filtreli) ? props.filtreli.length : props.filtreli}</SayiGosterge>
            <IcerikGosterge>{props.filtreliText}</IcerikGosterge>
          </IcerikDiv>
        )}
        <IcerikDiv>
          <SayiGosterge>{props.toplam.length}</SayiGosterge>
          <IcerikGosterge>{props.toplamText}</IcerikGosterge>
        </IcerikDiv>
      </GostergeDiv>
    </Card>
  )
}
