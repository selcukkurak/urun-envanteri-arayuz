import { useEffect } from 'react'
import Axios from 'axios'
import { urunlerState} from '../store'
import {keyBy, uniqBy} from 'lodash'
import { useSetRecoilState } from 'recoil'

async function urunleriGetir () {
  const urunlerReq = Axios.get('/api/urunler')
  const sayilarReq = Axios.get('/api/urunler/sayilar')
  const kaynakKurumlarReq = Axios.get('/api/urunler/kaynak-kurumlar')
  const paylasimlarReq = Axios.get("/api/urunler/kuruluslar")
  const baglantilarReq = Axios.get('/api/urunler/baglantilar')
  const idariKayitlarReq = Axios.get('/api/urunler/idari-kayitlar')
  const anketlerReq = Axios.get('/api/urunler/anketler')
  const [urunler, sayilar, kurumlar, paylasimlar, baglantilar, idariKayitlar, anketler] = await Axios
      .all([urunlerReq, sayilarReq, kaynakKurumlarReq, paylasimlarReq, baglantilarReq, idariKayitlarReq, anketlerReq])

  const sayilarById = keyBy(sayilar.data, 'id')
  const kurumlarById = keyBy(kurumlar.data, 'id')
  const kuruluslarById = keyBy(paylasimlar.data, 'id')
  const baglantilarById = keyBy(baglantilar.data, 'id')
  const idariKayitlarById = keyBy(idariKayitlar.data, 'id')
  const anketlerById = keyBy(anketler.data, 'id')

  return urunler.data
    .filter(urun => !urun.taslak)
    .map(urun => ({
      ...urun,
      anketler:anketlerById[urun.id].anketIdler,
      idariKayitlar:idariKayitlarById[urun.id].idariKayitIdler,
      urunler: baglantilarById[urun.id].urunler,
      sayilar: sayilarById[urun.id],
      kurumlar: kurumlarById[urun.id].kurumlar,
      kurulus: uniqBy(kuruluslarById[urun.id].paylasimlar.map(p => p.kurulus), 'id')
     }))
}

function UrunLoader () {
  const setUrunler = useSetRecoilState(urunlerState)
  useEffect(() => {
    urunleriGetir().then(response => setUrunler(response))
  }, [setUrunler])

  return null
}

export default UrunLoader
