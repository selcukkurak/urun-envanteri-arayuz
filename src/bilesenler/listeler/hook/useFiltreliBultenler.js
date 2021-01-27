import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import uniq from 'lodash/uniq'
import {tekilBultenler } from '../../store/selectors'

export default function useFiltreliBultenler (filtreliUrunler) {
  const bultenler = useRecoilValue(tekilBultenler)


  return useMemo(() => {
    console.debug('filtreliyor')
    const urunBultenIdleri = uniq(
        filtreliUrunler.flatMap(urun =>
            urun.bultenler.map(bulten =>
                bulten.bultenId))
    )
    return bultenler.filter(data => {
      return urunBultenIdleri.includes(data.id)
    })
  }, [
    bultenler,
    filtreliUrunler
  ])
}
