import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import {siraliKuruluslar } from '../../store/selectors'

export default function useFiltreliKuruluslar (filtreliUrunler) {
    const kuruluslar = useRecoilValue(siraliKuruluslar)

    return useMemo(() => {
        const urunKurulusId = filtreliUrunler
            .flatMap(urun => urun.kurulus.map(k => k.id))

        return kuruluslar.filter(kurulus => {
                return urunKurulusId.includes(kurulus.id)
        })
    },[
        kuruluslar,
        filtreliUrunler
    ])
}