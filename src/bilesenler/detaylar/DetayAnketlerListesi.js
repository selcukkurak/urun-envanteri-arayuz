import React from "react";
import AnketDetayDialog from "./AnketDetayDialog";


export default function DetayAnketlerListesi(props){

    return(
        <div>
            {props.anketler.map(anket => (
                <div key={anket.id}>
                    <AnketDetayDialog anketValue={anket}/>
                </div>
            ))}
        </div>
    )
}