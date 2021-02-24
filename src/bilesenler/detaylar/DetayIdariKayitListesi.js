import React from "react";
import IdariKayitDialog from "./IdariKayitDialog";
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'
import   handleModal  from './handleModal'
import { Tag } from '@blueprintjs/core'
import { useRecoilValue } from 'recoil'
import { siraliKurumlar } from '../store/selectors'
import { seciliUrunState } from '../store'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LeftElement = styled.div`
  flex: 1;
`

const Etiket = styled.div`
  margin-left: 12px;
  max-width:50%;
  text-align: right;
`

export default function DetayIdariKayitListesi(props){
    const [
      open,
      handleClickOpenModal,
      handleClickCloseModal
    ] = handleModal()
    const [selectedItem, setSelectedItem] = React.useState(null)
    const kurumlar = useRecoilValue(siraliKurumlar)
    const kaynakKurumId = props.idariKayitlar.map(idari => idari.kaynakKurumId)
    const kurum =  kaynakKurumId.map(id => {
      return kurumlar.find(k => k.kodu === id)
    })
    const seciliUrun = useRecoilValue(seciliUrunState)
    const handleClickItem = (event,index) => {
      setSelectedItem(index);
    }


    return(
        <div>
            {props.idariKayitlar.map((idari, index) => (
                <div key={index} onClick={(event) => handleClickItem(event, idari)}>
                    <Container onClick={handleClickOpenModal}>
                        <Row>
                            <Col sm={12} style={{paddingTop:5, color:'#5A6F7B',cursor:'pointer', textDecoration:'underline',fontSize:'0.9em'}}>
                                <Wrapper>
                                    <LeftElement>
                                        {idari.adi}
                                    </LeftElement>
                                  {seciliUrun && kurum.map((k, key) => {
                                    if(k && k.kodu === idari.kaynakKurumId && index === key){
                                      return(
                                        <Etiket>
                                          <Tag>{k.adi}</Tag>
                                        </Etiket>
                                      )
                                    }
                                    else return null
                                  })}
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