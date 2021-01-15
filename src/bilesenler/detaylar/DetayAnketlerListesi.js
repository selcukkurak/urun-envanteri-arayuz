import React, {useState} from "react";
import AnketDetayDialog from "./AnketDetayDialog";


export default function DetayAnketlerListesi(props){
    const [, setSelectedItem] = useState(null)
    const handleClickItem = (event,index) => {
        setSelectedItem(index);
    }

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