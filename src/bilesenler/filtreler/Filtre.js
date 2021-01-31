import styled from 'styled-components'
import { Colors, Label } from '@blueprintjs/core'

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  flex: 1;
`

const FiltreBaslik = styled(Label)`
  &.bp3-label {
    height: 16px;
    margin-bottom: 4px;
    margin-left: 4px;
    font-weight: 600;
    color: ${Colors.GRAY1};
  }
`

function Filtre (props) {
  return (
    <div>
      <FiltreBaslik>
        {props.title}
      </FiltreBaslik>
      <Wrapper>
        <LeftElement>
          {props.children}
        </LeftElement>
      </Wrapper>
    </div>

  )
}

export default Filtre
