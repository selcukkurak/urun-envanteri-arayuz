import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { seciliUrun } from '../../store/selectors'
import { anketlerState } from '../../store'

export default function useFiltreliAnketler(filtreliUrunler){

  const anketler = useRecoilValue(anketlerState)
  const urun = useRecoilValue(seciliUrun)

  return useMemo(() => {
    const urunAnketIdler = filtreliUrunler.flatMap(urun => urun.anketler.map(anket => anket.id))

    return anketler.filter(anket => {
      if(urun)
        return urun.anketler.some(a => a.id === anket.id)
      else
        return urunAnketIdler.includes(anket.id)
    })
  }, [
    anketler,
    urun,
    filtreliUrunler
  ])
}