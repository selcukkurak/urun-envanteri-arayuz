import Axios from 'axios'
import { useEffect } from 'react'
import { referanslarState } from '../store'
import { useSetRecoilState } from 'recoil'
import {useRecoilValue} from "recoil";

export default function (props) {
  const setReferanslar = useSetRecoilState(referanslarState)


  useEffect(() => {
    Axios.get('/api/referanslar')
      .then(response => setReferanslar(response.data.referanslar))
  }, [setReferanslar])
  return null
}