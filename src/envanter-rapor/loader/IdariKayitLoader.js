import { useEffect } from 'react'
import Axios from 'axios'
import {idariKayitlarState} from '../store'
import { useSetRecoilState } from 'recoil/dist'

export default function () {
    const setIdariKayitlar = useSetRecoilState(idariKayitlarState)

    useEffect(() => {
        Axios.get('/api/idari-kayitlar')
            .then(response => setIdariKayitlar(response.data))
    }, [setIdariKayitlar])

    return null
}