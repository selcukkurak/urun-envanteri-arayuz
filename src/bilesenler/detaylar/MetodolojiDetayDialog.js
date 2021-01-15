import React,{useState} from "react";
import {useRecoilValue} from "recoil";
import {seciliUrun} from "../store/selectors";
import {Button, Classes, Dialog, Divider, HTMLTable} from "@blueprintjs/core";
import {Container} from "react-grid-system";
import useMetodolojiler from "../listeler/hook/useMetodolojiler";


export default function MetodolojiDetayDialog(){
    const [open, setOpen] = useState(false)
    const urun = useRecoilValue(seciliUrun)
    const metodolojiler = useMetodolojiler()

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <div>
            <Button minimal intent="primary" onClick={handleOpen}>
                Metodoloji
            </Button>
            <Dialog
                icon="info-sign"
                onClose={handleClose}
                title={urun.adi}
                isOpen={open}
            >
                <div className={Classes.DIALOG_BODY}>
                    <Container>
                        <HTMLTable>
                            <thead>
                                <tr>
                                    <td>Metodoloji Adı</td>
                                    <td>Standartı Belirleyen Kurum</td>
                                    <td>Döküman Adı</td>
                                    <td>Url</td>
                                    <td>Geçerlilik Tarihi</td>
                                </tr>
                            </thead>
                            <tbody>
                            {metodolojiler.length !== 0 &&  metodolojiler.map(metodoloji => (
                                <tr key={metodoloji.id}>
                                    <td>{metodoloji.adi}</td>
                                    <td>{metodoloji.standartiBelirleyenKurum}</td>
                                    <td>{metodoloji.dokumanAdi}</td>
                                    <td>
                                        <a href={metodoloji.url} target='_blank'>{metodoloji.url}</a>
                                    </td>
                                    <td>{metodoloji.gecerlilikTarihi}</td>
                                </tr>
                            ))}
                            </tbody>
                        </HTMLTable>
                    </Container>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={handleClose}>Kapat</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}