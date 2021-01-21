import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { seciliUrun } from '../../store/selectors'
import { idariKayitlarState } from '../../store'

export default function useFiltreliIdariKayitlar (filtreliUrunler){
  const idariKayitlar = useRecoilValue(idariKayitlarState)
  const urun = useRecoilValue(seciliUrun)

  return useMemo(() => {
    const urunIdariKayitIdler = filtreliUrunler
      .flatMap(urun => urun.idariKayitlar.map(kayit => kayit.id))
    console.log(urunIdariKayitIdler)
    return idariKayitlar.filter(idari => {
      if (urun)
        return urun.idariKayitlar.some(kayit => kayit.id === idari.id)
      else
        return urunIdariKayitIdler.includes(idari.id)
    })
  }, [
    idariKayitlar,
    urun,
    filtreliUrunler
  ])
}
