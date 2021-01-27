import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { siraliKurumlar } from '../../store/selectors'

export default function useFiltreliKurumlar (filtreliUrunler) {
  const kurumlar = useRecoilValue(siraliKurumlar)

  return useMemo(() => {
    const urunKurumIdleri = filtreliUrunler
      .flatMap(u => u.kurumlar.map(k => k.kurumId))

    return kurumlar.filter(kurum => {
        return urunKurumIdleri.includes(kurum.kodu)

    })
  }, [
    kurumlar,
    filtreliUrunler
  ])
}
