import React from 'react'

function BultenUrl (props) {
  const { bulten } = props

  return (
    <a href={"https://data.tuik.gov.tr/Bulten/Index?p=" + bulten.sonYayin.id} target='_blank' rel="noreferrer">{bulten.adi}</a>
  )
}

export default BultenUrl