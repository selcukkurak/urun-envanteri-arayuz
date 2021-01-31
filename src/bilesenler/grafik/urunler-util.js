export function nodelaraCevir (urunler) {
  const urunIdleri = urunler.map(urun => urun.id)
  const baglantilariDuzeltilmisUrunler = urunler.map(urun => ({
    ...urun,
    urunler: urun.urunler.filter(id => urunIdleri.includes(id))
  }))

  const nodes = baglantilariDuzeltilmisUrunler.map(urun => ({
    id: urun.id,
    label: urun.adi,
    title: urun.adi,
    value: urun.urunler.length,
    group: urun.birimId
  }))

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