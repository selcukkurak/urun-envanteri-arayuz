import React,{useState} from "react";
import {Menu, MenuItem} from "@blueprintjs/core";
import IdariKayitDialog from "./IdariKayitDialog";


export default function DetayIdariKayitListesi(props){


    return(
        <div>
            {props.idariKayitlar.map(idari => (
                <div key={idari.id}>
                    <IdariKayitDialog idariKayitValue={idari}/>
                </div>
            ))}
        </div>
    )
}