import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { anketlerState } from '../../store'

export default function useFiltreliAnketler(filtreliUrunler){

  const anketler = useRecoilValue(anketlerState)

  return useMemo(() => {
    const urunAnketIdler = filtreliUrunler.flatMap(urun => urun.anketler.map(anket => anket.id))

    return anketler.filter(anket => {
        return urunAnketIdler.includes(anket.id)
    })
  }, [
    anketler,
    filtreliUrunler
  ])
}