import React from "react";
import IdariKayitDialog from "./IdariKayitDialog";


export default function DetayIdariKayitListesi(props){


    return(
        <div>
            {props.idariKayitlar.map(idari => (
                <div key={idari.id}>
                    <IdariKayitDialog idariKayit={idari}/>
                </div>
            ))}
        </div>
    )
}