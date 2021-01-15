import {useEffect, useState} from "react";
import Axios from "axios";


export default function useMetaveriler(urunler, seciliUrunId, seciliUrun) {
    const [metaveriler, setMetaveriler] = useState([])



    useEffect(() => {
        if(seciliUrun && seciliUrun.bultenler.length !== 0){
            const bultenIdler = seciliUrun.bultenler.map(b => b.bultenId)
            Axios.get(`/api/bultenler/metaveri/${bultenIdler}`)
                .then(response => setMetaveriler(response.data))
        }
    }, [seciliUrunId, seciliUrun])
    return metaveriler
}