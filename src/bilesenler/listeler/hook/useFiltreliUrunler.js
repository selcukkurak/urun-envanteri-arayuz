import { useMemo } from 'react'
import {
  birimlerState, seciliAnketState,
  seciliBirimlerState, seciliBultenState,
  seciliCografiDuzeylerState, seciliHaberBulteniDurumuState, seciliIdariKayitState, seciliKaynakKurulusState,
  seciliKaynakKurumState,
  seciliUretimSikliklariState
} from '../../store'
import { useRecoilValue } from 'recoil'
import { siraliUrunler } from '../../store/selectors'



function idIceriyorMu (dizi, nesne, key) {
  if (dizi && dizi.length === 0) return true
  else {
    const value = nesne[key]
    console.debug(dizi)
    return value && dizi &&  dizi.some(item => item.value === value.id)
  }
}
function bultenIceriyorMu (bulten, nesne, key) {
  if(bulten === null) return true
  else if(bulten.durum === true) return nesne[key].length !== 0
  else return nesne[key].length === 0
}

export default function useFiltreliUrunler (arananUrun) {
  const urunler = useRecoilValue(siraliUrunler)
  const birimler = useRecoilValue(birimlerState)

  const secilenHaberBulteniDurumu = useRecoilValue(seciliHaberBulteniDurumuState)
  const secilenUretimSikliklar = useRecoilValue(seciliUretimSikliklariState)
  const secilenCografiDuzeyler = useRecoilValue(seciliCografiDuzeylerState)
  const secilenBirimler = useRecoilValue(seciliBirimlerState)
  const secilenKaynakKurum = useRecoilValue(seciliKaynakKurumState)
  const secilenKaynakKurulus = useRecoilValue(seciliKaynakKurulusState)
  const secilenIdariKayit = useRecoilValue(seciliIdariKayitState)
  const secilenAnket = useRecoilValue(seciliAnketState)
  const secilenHaberBulteni = useRecoilValue(seciliBultenState)


  return useMemo(() => {
    const secilenAltBirimler =  secilenBirimler.length === 0
      ? []
      : birimler
        .filter(birim => secilenBirimler && secilenBirimler.includes(birim.ustBirimId))
        .map(birim => birim.id)

    console.debug(secilenBirimler, secilenAltBirimler, secilenKaynakKurum, secilenKaynakKurulus)
    return urunler.filter(urun => {
      return (idIceriyorMu(secilenUretimSikliklar, urun, 'periyot'))
        && (idIceriyorMu(secilenCografiDuzeyler, urun, 'cografiDuzey'))
        && (bultenIceriyorMu(secilenHaberBulteniDurumu, urun, 'bultenler'))
        && ((secilenBirimler && secilenBirimler.length === 0) || secilenAltBirimler.includes(urun.birimId))
        && (!secilenHaberBulteni || urun.bultenler.some(b => b.bultenId === secilenHaberBulteni.value))
        && (!secilenAnket || urun.anketler.some(a => a.id === secilenAnket.value))
        && (!secilenIdariKayit || urun.idariKayitlar.some(idari => idari.id === secilenIdariKayit.value))
        && (!secilenKaynakKurum || urun.kurumlar.some(k => k.kurumId === secilenKaynakKurum.value))
        && (!secilenKaynakKurulus || urun.kurulus.some(kurulus => kurulus.id === secilenKaynakKurulus.value))
        && (!arananUrun || urun.adi.toLowerCase().includes(arananUrun.toLowerCase()))
    })
  }, [
    arananUrun,
    urunler,
    birimler,
    secilenUretimSikliklar,
    secilenCografiDuzeyler,
    secilenBirimler,
    secilenHaberBulteniDurumu,
    secilenKaynakKurum,
    secilenKaynakKurulus,
    secilenHaberBulteni,
    secilenIdariKayit,
    secilenAnket
  ])
}
