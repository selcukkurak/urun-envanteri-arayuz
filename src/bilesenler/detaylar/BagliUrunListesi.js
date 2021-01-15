import React from "react";
import {Menu, MenuItem} from "@blueprintjs/core";
import styled from "styled-components";
import {seciliUrunState} from "../store";
import {useSetRecoilState} from "recoil";

const MenuItemStyled = styled(MenuItem)`
  padding-top: 5px;
  color:#5A6F7B;
  text-decoration: underline;
  font-size: 0.7em;
`

export default function BagliUrunListesi(props){
    const setSeciliUrunId = useSetRecoilState(seciliUrunState)

    const handleClickItem = (event,index) => {
        setSeciliUrunId(index);
    }

    return(
        <Menu>
            {props.urunler.map(urun => (
                <MenuItemStyled
                    key={urun.id}
                    onClick={(event) => handleClickItem(event, urun.id)}
                    text={urun.adi}
                />
            ))}
        </Menu>
    )
}