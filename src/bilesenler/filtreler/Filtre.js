import styled from 'styled-components'

const Wrapper = styled.div`
        padding: 0;
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  flex: 1;
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
      </Wrapper>
    </div>

  )
}

export default Filtre
