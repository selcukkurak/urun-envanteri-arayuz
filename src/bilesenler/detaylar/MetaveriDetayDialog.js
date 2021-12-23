import React, { memo } from 'react'
import styled from 'styled-components'
import { Button, Classes, Drawer } from '@blueprintjs/core'
import useMetaveriDetay from '../listeler/hook/useMetaveriDetay'
import { useRecoilValue } from 'recoil'
import { seciliUrun } from '../store/selectors'
import { groupBy, keyBy } from 'lodash'
import useMetaveriler from '../listeler/hook/useMetaveriler'
import { localSort } from '../util/sort'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion'
// import htmlParser from '../util/htmlParser'

const Baslik = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`
const Yazi = styled.div`
  margin-top:16px;
`
const Icerik = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

function MetaveriDetayDialog () {
  const [
    open,
    handleClickMetaveriItem,
    selectedMetaveri,
    handleClickOpen,
    handleClikClose
  ] = useMetaveriDetay()
  console.debug(selectedMetaveri)
  const urun = useRecoilValue(seciliUrun)
  const groupByMetaveriler = groupBy(useMetaveriler(urun).flatMap(m => m), 'baslik')
  const seciliMetaveri = Object.values(groupByMetaveriler).find((metaveri, index) => index === selectedMetaveri)
  const groupBySeciliMetaveri = keyBy(seciliMetaveri, 'alanAdi')

  const siraliAlanAdlari = localSort(Object.values(groupBySeciliMetaveri), 'alanAdi')
  if(urun.bultenler.length === 0 || Object.values(groupByMetaveriler).length === 0 ) return null
  return (
    <div>
      <Button minimal intent={'primary'} text={'Metaveriler'} onClick={handleClickOpen}/>
      <Drawer
        isOpen={open}
        icon="info-sign"
        onClose={handleClikClose}
        title="Metaveriler"
      >
        <div className={Classes.DRAWER_BODY}>
          <div className={Classes.DIALOG_BODY}>
            <Accordion allowZeroExpanded>
              {Object.keys(groupByMetaveriler).map((baslik, index) => (
                <AccordionItem key={index} onClick={() => handleClickMetaveriItem(index)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {baslik}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                    <AccordionItemPanel>
                      {siraliAlanAdlari.map((metaveri, key) => (
                        <Icerik  key={key}>
                          <Baslik>{metaveri.alanAdi}</Baslik>
                          <Yazi>{metaveri.aciklama}</Yazi>
                        </Icerik>
                        ))}
                    </AccordionItemPanel>

                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className={Classes.DRAWER_FOOTER}>
          <Button intent='danger' icon='cross' minimal onClick={handleClikClose}>Kapat</Button>
        </div>
      </Drawer>
    </div>
  )
}

export default memo(MetaveriDetayDialog)