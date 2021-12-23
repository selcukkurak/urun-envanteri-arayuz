import { useEffect } from 'react'
import Axios from 'axios'
import { birimlerState } from '../store'
import { useSetRecoilState } from 'recoil'

function birimAdiKucult (birim) {
  return {
    ...birim,
    adi: birim.adi
  }
}

function BirimLoader () {
  const setBirimler = useSetRecoilState(birimlerState)

  useEffect(() => {
    Axios.get('/api/birimler')
      .then(response => setBirimler(response?.data.map(birimAdiKucult)))
  }, [setBirimler])

  return null
}

export default BirimLoader
