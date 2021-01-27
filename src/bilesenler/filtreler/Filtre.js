import styled from 'styled-components'
import { Tag } from '@blueprintjs/core'

const Wrapper = styled.div`
        padding: 0;
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  width: 85%;
  max-width: 85%;
  flex: 1;
`

const Etiket = styled.div`
  margin-left: 12px;
  width: 40px;
  text-align: right;
`
const FiltreBaslik = styled.label`
  padding-bottom: 0;
  font-size: 14px;
`

function Filtre (props) {
  return (
    <div>
      {props.secili &&  (
        <FiltreBaslik>{props.title}</FiltreBaslik>
      )}
      <Wrapper>
        <LeftElement>
          {props.children}
        </LeftElement>
        <Etiket>
          {props.etiket && (
            <Tag intent='danger'>{props.etiket}</Tag>
          )}
        </Etiket>
      </Wrapper>
    </div>

  )
}

export default Filtre
