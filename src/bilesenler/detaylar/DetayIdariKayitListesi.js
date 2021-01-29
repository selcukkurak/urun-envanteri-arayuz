import React from "react";
import IdariKayitDialog from "./IdariKayitDialog";
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'
import   handleModal  from './handleModal'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  flex: 1;
`



export default function DetayIdariKayitListesi(props){
    const [
      open,
      handleClickOpenModal,
      handleClickCloseModal
    ] = handleModal()
    const [selectedItem, setSelectedItem] = React.useState(null)

    const handleClickItem = (event,index) => {
      setSelectedItem(index);
    }


    return(
        <div>
            {props.idariKayitlar.map(idari => (
                <div key={idari.id} onClick={(event) => handleClickItem(event, idari)}>
                    <Container onClick={handleClickOpenModal}>
                        <Row>
                            <Col sm={12} style={{paddingTop:5, color:'#5A6F7B',cursor:'pointer', textDecoration:'underline',fontSize:'0.9em'}}>
                                <Wrapper>
                                    <LeftElement>
                                        {idari.adi}
                                    </LeftElement>
                                </Wrapper>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
          <IdariKayitDialog idariKayit={selectedItem}  open={open} handleClickCloseModal={handleClickCloseModal}/>
        </div>
    )
}