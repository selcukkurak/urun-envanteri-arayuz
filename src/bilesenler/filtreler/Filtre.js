import styled from 'styled-components'
import { Tag } from '@blueprintjs/core'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  flex: 1;
`

const Etiket = styled.div`
  margin-left: 12px;
  width: 40px;
  text-align: right;
`

function Filtre (props) {
  return (
    <Wrapper>
      <LeftElement>
        {props.children}
      </LeftElement>
      <Etiket>
        <Tag intent='danger'>{props.etiket}</Tag>
      </Etiket>
    </Wrapper>
  )
}

export default Filtre
