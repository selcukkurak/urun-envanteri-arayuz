import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { idariKayitlarState } from '../../store'

export default function useFiltreliIdariKayitlar (filtreliUrunler){
  const idariKayitlar = useRecoilValue(idariKayitlarState)

  return useMemo(() => {
    const urunIdariKayitIdler = filtreliUrunler
      .flatMap(urun => urun.idariKayitlar.map(kayit => kayit.id))

    return idariKayitlar.filter(idari => {
        return urunIdariKayitIdler.includes(idari.id)
    })
  }, [
    idariKayitlar,
    filtreliUrunler
  ])
}
