import { useMemo } from 'react'
import { useRecoilValue } from 'recoil/dist'
import { seciliUrun, siraliKurumlar } from '../../store/selectors'

export default function useFiltreliKurumlar (filtreliUrunler) {
  const kurumlar = useRecoilValue(siraliKurumlar)
  const urun = useRecoilValue(seciliUrun)

  return useMemo(() => {
    const urunKurumIdleri = filtreliUrunler
      .flatMap(u => u.kurumlar.map(k => k.kurumId))

    return kurumlar.filter(kurum => {
      if (urun) {
        return urun.kurumlar.some(k => k.kurumId === kurum.kodu)
      } else {
        return urunKurumIdleri.includes(kurum.kodu)
      }
    })
  }, [
    kurumlar,
    filtreliUrunler,
    urun
  ])
}
