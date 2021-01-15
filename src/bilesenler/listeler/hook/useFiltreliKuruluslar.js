import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { seciliUrun, siraliKuruluslar } from '../../store/selectors'

export default function useFiltreliKuruluslar (filtreliUrunler) {
    const kuruluslar = useRecoilValue(siraliKuruluslar)
    const urun = useRecoilValue(seciliUrun)

    return useMemo(() => {
        const urunKurulusId = filtreliUrunler
            .flatMap(urun => urun.kurulus.map(k => k.id))

        return kuruluslar.filter(kurulus => {
            if(urun){
                return urun.kurulus.length !== 0 && urun.kurulus.some(k => k.id === kurulus.id)
            } else {
                return urunKurulusId.includes(kurulus.id)
            }
        })
    },[
        kuruluslar,
        filtreliUrunler,
        urun,
    ])
}