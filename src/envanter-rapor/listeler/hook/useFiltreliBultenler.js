import { useMemo } from 'react'
import { useRecoilValue } from 'recoil/dist'
import uniq from 'lodash/uniq'
import { seciliUrun, tekilBultenler } from '../../store/selectors'

export default function useFiltreliBultenler (filtreliUrunler) {
  const bultenler = useRecoilValue(tekilBultenler)
  const urun = useRecoilValue(seciliUrun)


  return useMemo(() => {
    console.debug('filtreliyor')
    const urunBultenIdleri = uniq(
        filtreliUrunler.flatMap(urun =>
            urun.bultenler.map(bulten =>
                bulten.bultenId))
    )
    return bultenler.filter(data => {
      if (urun) {
        return urun.bultenler.some(b => b.bultenId === data.id)
      } else {
        return urunBultenIdleri.includes(data.id)
      }
    })
  }, [
    bultenler,
    filtreliUrunler,
    urun
  ])
}
