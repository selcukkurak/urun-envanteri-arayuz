import {useMemo} from 'react'
import { useRecoilValue } from 'recoil'
import { siraliUrunDaireleri } from '../../store/selectors'
import { birimlerState } from '../../store'



export default function useFiltreliBirimler(filtreliUrunler){
  const birimler = useRecoilValue(birimlerState)
  const daireler = useRecoilValue(siraliUrunDaireleri)
  return useMemo(() => {
    const urunBirimIdleri = filtreliUrunler.flatMap(u => u.birimId)
    const filtreliBirimler =birimler.filter(birim => {
        return urunBirimIdleri.includes(birim.id)
    })
      .map(birim => birim.ustBirimId)
    return daireler
      .filter(daire => filtreliBirimler.includes(daire.id))
  }, [
    birimler,
    daireler,
    filtreliUrunler
  ])
}