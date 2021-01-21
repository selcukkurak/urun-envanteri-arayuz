import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function BultenUrl (props) {
  const { bulten } = props
  const [url, setUrl] = useState()

  useEffect(() => {
    Axios.get('/api/bultenler/url', { params: { id: bulten.sonYayin.id, dilId: 1 }})
      .then(res => setUrl(res.data))
  }, [bulten])

  if (!url) return null

  return (
    <a href={url} target='_blank' rel="noreferrer">{bulten.adi}</a>
  )
}

export default BultenUrl