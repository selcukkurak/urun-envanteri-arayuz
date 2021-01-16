import React from 'react'
import { useRecoilState } from 'recoil'
import { seciliHaberBulteniDurumuState } from '../store'
import { Colors, Tag } from '@blueprintjs/core'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 52px;
`

const Label = styled.div`
    font-weight: 600;
    color: ${Colors.GRAY1};
    flex: 1;
`

const Secenek = styled(Tag)`
  margin-left: 12px;
`

const secenekler = [
    {id:0, durum: true, adi:"Var"},
    {id:1, durum: false, adi: "Yok"}
]
export default function HaberBulteniDurumu(){
    const [secili, setSecili] = useRecoilState(seciliHaberBulteniDurumuState)

    const handleClickHaberBulteniDurumuItem = (event, secenek) => {
        if (!secili || secenek.durum !== secili.durum) {
            setSecili(secenek)
        }
        else {
            setSecili(null)
        }
    }

    console.debug(secili)
    return(
        <Wrapper>
            <Label>Haber Bülteni:</Label>
            {secenekler.map(secenek => (
                <Secenek
                  minimal={!secili || secili.durum !== secenek.durum}
                  interactive
                  intent='danger'
                  onClick={(event) => handleClickHaberBulteniDurumuItem(event, secenek)}
                  key={secenek.id}>
                    {secenek.adi}
                </Secenek>
            ))}
        </Wrapper>
    )
}