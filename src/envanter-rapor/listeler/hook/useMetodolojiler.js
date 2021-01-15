import {useState, useEffect} from "react";
import {useRecoilValue} from "recoil/dist";
import {seciliUrunState} from "../../store";
import Axios from "axios";


export default function useMetodolojiler(){
    const [metodoloji, setMetodoloji] = useState([])
    const seciliUrun = useRecoilValue(seciliUrunState)

    useEffect(() => {
        Axios.get(`/api/metodolojiler/${seciliUrun}`)
            .then(response => setMetodoloji(response.data))
    }, [seciliUrun])
    return metodoloji
}