export function nodelaraCevir (urunler, filtreliUrunler) {
  const urunIdleri = urunler.map(urun => urun.id)
  const filtreliUrunIdleri = filtreliUrunler.map(urun => urun.id)

  const baglantilariDuzeltilmisUrunler = urunler.map(urun => ({
    ...urun,
    urunler: urun.urunler.filter(id => urunIdleri.includes(id))
  }))

  const nodes = baglantilariDuzeltilmisUrunler.map(urun => {
    const gorunur = filtreliUrunIdleri.includes(urun.id)

    return {
      id: urun.id,
      label: gorunur && urun.adi,
      title: urun.adi,
      value: urun.urunler.length,
      group: urun.birimId,
      color: !gorunur && "#efefef"
    }
  })

  const edges = baglantilariDuzeltilmisUrunler.flatMap(urun => {
    const to = urun.id
    return urun.urunler.map(id => ({
      id: `edge-${id}-${to}`,
      from: id,
      to: to
    }))
  })

  const allConnectedIds = [
    ...edges.map(edge => edge.from),
    ...edges.map(edge => edge.to)
  ]

  const nodesWithEdges = nodes.filter(node => allConnectedIds.includes(node.id))

  return {
    nodes: nodesWithEdges,
    edges
  }
}