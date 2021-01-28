import {useSetRecoilState } from 'recoil'
import {
  seciliAnketState, seciliBirimlerState, seciliBultenState, seciliCografiDuzeylerState, seciliHaberBulteniDurumuState,
  seciliIdariKayitState,
  seciliKaynakKurulusState,
  seciliKaynakKurumState, seciliUretimSikliklariState,
  seciliUrunState
} from '../store'
import { Button } from '@blueprintjs/core'

export default function ResetFiltre(props){
  const setSeciliUrun = useSetRecoilState(seciliUrunState)
  const setSelectedKaynakKurum = useSetRecoilState(seciliKaynakKurumState)
  const setSeciliAnket = useSetRecoilState(seciliAnketState)
  const setSeciliIdariKayit = useSetRecoilState(seciliIdariKayitState)
  const setSelectedKurulus = useSetRecoilState(seciliKaynakKurulusState)
  const setSeciliBulten = useSetRecoilState(seciliBultenState)
  const setSeciliHaberBulteniDurumu = useSetRecoilState(seciliHaberBulteniDurumuState)
  const setSeciliCografiDuzeyler = useSetRecoilState(seciliCografiDuzeylerState)
  const setSeciliBirimler = useSetRecoilState(seciliBirimlerState)
  const setUretimSikliklar = useSetRecoilState(seciliUretimSikliklariState)

  const resetFiltre = () => {
    setSelectedKaynakKurum(null);
    setSelectedKurulus(null);
    setSeciliUrun(null);
    setSeciliAnket(null);
    setSeciliBirimler([]);
    setSeciliIdariKayit(null);
    setSeciliBulten(null)
    setSeciliHaberBulteniDurumu(null);
    setSeciliCografiDuzeyler([]);
    setUretimSikliklar([]);
    props.removeUrunAramaChange();
  }

  return(
    <Button
      minimal
      intent={'danger'}
      onClick={resetFiltre}
      rightIcon={'cross'}
      text={"Filtreleri Temizle"}
    />
  )
}