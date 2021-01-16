export function nodelaraCevir (urunler) {
  const nodes = urunler.map(urun => ({
    id: urun.id,
    label: urun.adi
  }))

  const edges = urunler.flatMap(urun => {
    const target = urun.id
    return urun.urunler.map(id => ({
      id: `edge-${target}-${id}`,
      source: id,
      target
    }))
  }).filter(edge => edge.source !== edge.target)

  const allConnectedIds = [
    ...edges.map(edge => edge.source),
    ...edges.map(edge => edge.target)
  ]

  const nodesWithEdges = nodes.filter(node => allConnectedIds.includes(node.id))

  return {
    nodes: nodesWithEdges,
    edges
  }
}