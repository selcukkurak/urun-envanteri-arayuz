import React, { memo } from 'react'
import styled from "styled-components";
import {MenuItem} from "@blueprintjs/core";

const ListeGrupItem = styled(MenuItem)`
        display: flex;
  &:hover {
    cursor: pointer;
  }
`
function ListeItem (props) {

    return (
        <div>
            <ListeGrupItem
                active={props.selected}
                onClick={props.onClick}
                text={props.text}
                label={props.rightItems}
            />

        </div>

    )
}

export default memo(ListeItem)
