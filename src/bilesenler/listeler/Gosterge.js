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
  padding-top: 0;
  display: flex;
  flex-direction: row;
`
export const IcerikDiv = styled.div`
  margin-right: 64px;
  flex: 1 1 0;
  
  &:last-child {
    margin-right: 0;
  }
`

export default function Gosterge(props){
  return(
    <Card style={{maxWidth:"200px", width:"200px"}}>
      <BaslikGosterge>{props.baslik}</BaslikGosterge>
      <GostergeDiv>
          <IcerikDiv>
            {props.toplam.length !== props.filtreli.length && (
            <>
              <SayiGosterge>{props.filtreli.length}</SayiGosterge>
              <IcerikGosterge>Ürünle İlişkili</IcerikGosterge>
            </>
            )}
          </IcerikDiv>
        <IcerikDiv>
            <SayiGosterge>{props.toplam.length}</SayiGosterge>
            <IcerikGosterge>Toplam</IcerikGosterge>
        </IcerikDiv>
      </GostergeDiv>
    </Card>
  )
}
