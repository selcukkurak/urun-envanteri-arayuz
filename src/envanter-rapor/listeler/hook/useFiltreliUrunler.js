import { useMemo } from 'react'
import {
  birimlerState, seciliAnketState,
  seciliBirimlerState,
  seciliCografiDuzeylerState, seciliIdariKayitState, seciliKaynakKurulusState,
  seciliKaynakKurumState, seciliUretimDurumuState,
  seciliUretimSikliklariState
} from '../../store'
import { useRecoilValue } from 'recoil/dist'
import { siraliUrunler } from '../../store/selectors'

// function veriTuruBul (urun, secilenVeriTuru) {
//   switch (secilenVeriTuru.id) {
//     case 1:
//       return urun.sayilar.anket > 0
//     case 2:
//       return urun.sayilar.idariKayit > 0
//     case 3:
//       return urun.sayilar.anket > 0 && urun.sayilar.idariKayit > 0
//     default:
//       return false
//   }
// }

function idIceriyorMu (dizi, nesne, key) {
  if (dizi && dizi.length === 0) return true
  else {
    const value = nesne[key]
    console.log(dizi)
    return value && dizi &&  dizi.some(item => item.value === value.id)
  }
}

export default function useFiltreliUrunler (arananUrun) {
  const urunler = useRecoilValue(siraliUrunler)
  const birimler = useRecoilValue(birimlerState)

  const secilenUretimDurumu = useRecoilValue(seciliUretimDurumuState)
  const secilenUretimSikliklar = useRecoilValue(seciliUretimSikliklariState)
  const secilenCografiDuzeyler = useRecoilValue(seciliCografiDuzeylerState)
  const secilenBirimler = useRecoilValue(seciliBirimlerState)
  const secilenKaynakKurum = useRecoilValue(seciliKaynakKurumState)
  const secilenKaynakKurulus = useRecoilValue(seciliKaynakKurulusState)
  const secilenIdariKayit = useRecoilValue(seciliIdariKayitState)
  const secilenAnket = useRecoilValue(seciliAnketState)

  return useMemo(() => {
    const secilenAltBirimler = secilenBirimler && secilenBirimler.length === 0
      ? []
      : birimler
        .filter(birim => secilenBirimler && secilenBirimler.includes(birim.ustBirimId))
        .map(birim => birim.id)


    console.debug(secilenBirimler, secilenAltBirimler, secilenKaynakKurum, secilenKaynakKurulus)
    console.log(secilenIdariKayit && urunler.filter(urun => urun.idariKayitlar.includes(secilenIdariKayit.value) ))
    return urunler.filter(urun => {
      return (idIceriyorMu(secilenUretimSikliklar, urun, 'periyot'))
        && (idIceriyorMu(secilenCografiDuzeyler, urun, 'cografiDuzey'))
        && (secilenUretimDurumu === null || secilenUretimDurumu === urun.uretiliyor)
        && (secilenBirimler && secilenBirimler.length === 0 || secilenAltBirimler.includes(urun.birimId))
        && (!secilenKaynakKurum || urun.kurumlar.some(k => k.kurumId === secilenKaynakKurum.value))
        && (!secilenIdariKayit || urun.idariKayitlar.includes(secilenIdariKayit.value))
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
    secilenKaynakKurum,
    secilenKaynakKurulus,
    secilenUretimDurumu
  ])
}
