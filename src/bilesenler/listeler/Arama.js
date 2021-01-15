import React from "react";
import styled from "styled-components";
import {InputGroup} from "@blueprintjs/core";

const InputArama = styled(InputGroup)`
  margin-top: 10%;

`
export default function Arama(props){
    return(
        <InputArama
            placeholder="Ürünler içerisinde arayın..."
            onChange={props.onUrunAramaChange}
            leftIcon={"search"}
        />
    )
}