import React,{memo} from "react";
import styled from "styled-components";
import {Button, Classes, Dialog} from "@blueprintjs/core";
import useMetaveriDetay from "../listeler/hook/useMetaveriDetay";
import {useRecoilValue} from "recoil";
import {seciliUrun} from "../store/selectors";
import {groupBy, keyBy} from 'lodash'
import useMetaveriler from "../listeler/hook/useMetaveriler";
import {localSort} from "../util/sort";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import htmlParser from "../util/htmlParser";

const Baslik = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`
const Yazi = styled.div`
    padding: 5%;
`

function MetaveriDetayDialog(){
    const [
        open,
        handleClickMetaveriItem,
        selectedMetaveri,
        handleClickOpen,
        handleClikClose
    ] = useMetaveriDetay()
    console.log(selectedMetaveri)
    const urun = useRecoilValue(seciliUrun)
    const groupByMetaveriler = groupBy(useMetaveriler(urun).flatMap(m => m), 'baslik')
    const seciliMetaveri = Object.values(groupByMetaveriler).find((metaveri,index) => index === selectedMetaveri)
    const groupBySeciliMetaveri = keyBy(seciliMetaveri, 'alanAdi')

    const siraliAlanAdlari = localSort(Object.values(groupBySeciliMetaveri), 'alanAdi')
    return(
        <div>
            <Button minimal intent={"primary"} text={"Metaveriler"} onClick={handleClickOpen}/>
            <Dialog
                isOpen={open}
                icon="info-sign"
                onClose={handleClikClose}
                title="Metaveriler"
            >
                <div className={Classes.DIALOG_BODY}>
                    <Accordion>
                        {Object.keys(groupByMetaveriler).map((baslik, index) => (
                            <AccordionItem key={index} onClick={() => handleClickMetaveriItem(index)}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {baslik}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                {siraliAlanAdlari.map((metaveri,key) => (
                                <AccordionItemPanel key={key}>
                                    <Baslik>{metaveri.alanAdi}</Baslik>
                                    <Yazi>{htmlParser(`${metaveri.aciklama}`)}</Yazi>
                                </AccordionItemPanel>
                                ))}
                            </AccordionItem>
                        ))}

                    </Accordion>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={handleClikClose}>Kapat</Button>
                    </div>
                </div>
            </Dialog>
        </div>

    )
}
export default memo(MetaveriDetayDialog)