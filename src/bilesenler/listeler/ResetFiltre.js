import {useRecoilState } from 'recoil'
import {
  seciliAnketState, seciliBirimlerState, seciliBultenState, seciliCografiDuzeylerState, seciliHaberBulteniDurumuState,
  seciliIdariKayitState,
  seciliKaynakKurulusState,
  seciliKaynakKurumState, seciliUretimSikliklariState,
  seciliUrunState
} from '../store'
import { Button } from '@blueprintjs/core'

export default function ResetFiltre(props){
  const [seciliUrun, setSeciliUrun] = useRecoilState(seciliUrunState)
  const [seciliKurum, setSelectedKaynakKurum] = useRecoilState(seciliKaynakKurumState)
  const [seciliAnket ,setSeciliAnket] = useRecoilState(seciliAnketState)
  const [seciliKayit, setSeciliIdariKayit] = useRecoilState(seciliIdariKayitState)
  const [seciliKurulus, setSelectedKurulus] = useRecoilState(seciliKaynakKurulusState)
  const [seciliBulten, setSeciliBulten] = useRecoilState(seciliBultenState)
  const [seciliHaberBulteniDurumu, setSeciliHaberBulteniDurumu] = useRecoilState(seciliHaberBulteniDurumuState)
  const [seciliCografi, setSeciliCografiDuzeyler] = useRecoilState(seciliCografiDuzeylerState)
  const [seciliBirimler, setSeciliBirimler] = useRecoilState(seciliBirimlerState)
  const [seciliUretim, setUretimSikliklar] = useRecoilState(seciliUretimSikliklariState)

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

  if(!seciliUrun && !seciliKurum && !seciliAnket && !seciliKayit && !seciliKurulus && !seciliBulten
    && !seciliHaberBulteniDurumu && seciliCografi.length === 0 && seciliBirimler.length === 0 && seciliUretim.length === 0
  ) return null
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