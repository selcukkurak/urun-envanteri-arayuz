import React from 'react'
import { InputGroup } from '@blueprintjs/core'

export default function Arama(props){
    return(
        <InputGroup
            placeholder="Ürünler içerisinde arayın..."
            onChange={props.onUrunAramaChange}
            leftIcon={"search"}
        />
    )
}