import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { seciliUretimDurumuState } from '../store'
import { Colors, Tag } from '@blueprintjs/core'

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
    {id:0, durum: true, adi:"Evet"},
    {id:1, durum: false, adi: "Hayır"}
]

export default function UretimDurumu(){
    const [secili, setSecili] = useRecoilState(seciliUretimDurumuState)

    const handleClickUretimDurumuItem = (event, secenek) => {
        if (!secili || secenek.durum !== secili.durum) {
            setSecili(secenek)
        }
        else {
            setSecili(null)
        }
    }
    return(
        <Wrapper>
            <Label>Üretiliyor:</Label>
            {secenekler.map(secenek => (
                <Secenek
                  minimal={!secili || secili.durum !== secenek.durum}
                  interactive
                  intent='danger'
                  onClick={(event) => handleClickUretimDurumuItem(event, secenek)}
                  key={secenek.id}>
                    {secenek.adi}
                </Secenek>
            ))}
        </Wrapper>
    )
}