import React, { memo } from 'react'
import { Tag, Tooltip } from '@blueprintjs/core'
import styled from 'styled-components'

const Etiket = styled.div`
  display: inline-block;
  margin-right: 4px;
`

const Kaynaklar = styled.div`
  display: inline-block;
  margin-left: 12px;
`

const Metin = styled.div`
  font-weight: 600;
`

export const Ikonlar = memo(props => {
  const { sayilar, bultenler } = props

  return (
    <div>
      {bultenler.length !== 0 && <Ikon tooltip='Haber Bülteni' intent='primary'><Metin>h</Metin></Ikon>}
      <Kaynaklar>
        {sayilar.anket !== 0 && <Ikon tooltip='Anket' intent='danger'><Metin>a</Metin></Ikon>}
        {sayilar.idariKayit !== 0 && <Ikon tooltip='İdari Kayıt' intent='warning'><Metin>ik</Metin></Ikon>}
        {sayilar.urun !== 0 && <Ikon tooltip='İstatistiki Ürün' intent='success'><Metin>ü</Metin></Ikon>}
      </Kaynaklar>
    </div>
  )
})

const Ikon = props => (
  <Etiket>
    <Tooltip content={props.tooltip}>
      <Tag minimal intent={props.intent}>{props.children}</Tag>
    </Tooltip>
  </Etiket>
)
