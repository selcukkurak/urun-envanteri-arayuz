import React from "react";
import AnketDetayDialog from "./AnketDetayDialog";
import { Col, Container, Row } from 'react-grid-system'
import handleModal from './handleModal'


export default function DetayAnketlerListesi(props){
    const [
      open,
      handleClickOpenModal,
      handleClickCloseModal
    ] = handleModal();
    return(
        <div>
            {props.anketler.map(anket => (
                <div key={anket.id}>
                    <Container onClick={handleClickOpenModal}>
                        <Row>
                            <Col style={{paddingTop:5, cursor:'pointer', color:'#5A6F7B', textDecoration:'underline',fontSize:'0.9em'}}
                                 sm={12}>{anket.adi}</Col>
                        </Row>
                    </Container>
                    <AnketDetayDialog anket={anket} open={open} handleClickCloseModal={handleClickCloseModal}/>
                </div>
            ))}
        </div>
    )
}