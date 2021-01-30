export function nodelaraCevir (urunler) {
  const nodes = urunler.map(urun => ({
    id: urun.id,
    label: urun.adi,
    value: urun.urunler.length,
    group: urun.birimId
  }))

  const edges = urunler.flatMap(urun => {
    const target = urun.id
    return urun.urunler.map(id => ({
      id: `edge-${target}-${id}`,
      from: id,
      to: target
    }))
  }).filter(edge => edge.from !== edge.to)

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