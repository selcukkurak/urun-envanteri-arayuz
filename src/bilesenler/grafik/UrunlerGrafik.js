import { nodelaraCevir } from './urunler-util'
import Graph from 'react-graph-vis'
import { memo, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { urunlerState } from '../store'

const options = {
  nodes: {
    shape: "dot",
    scaling: {
      min: 1,
      max: 24
    },
    font: {
      size: 4,
      face: "Tahoma",
    }
  },
  edges: {
    color: { inherit: true },
    width: 0.15
  },
  interaction: {
    hideEdgesOnDrag: true,
    tooltipDelay: 200,
    dragNodes: false
  },
  physics: {
    barnesHut: {
      avoidOverlap: 0.4
    },
    stabilization: { iterations: 100 }
  },
  height: 'calc(100vh - 114px)'
}

function UrunlerGrafik (props) {
  const urunler = useRecoilValue(urunlerState)

  const graph = useMemo(() => {
    if (urunler.length === 0) return null

    return nodelaraCevir(urunler)
  }, [urunler])

  if (!graph) return <div>Yükleniyor...</div>

  return (
    <Graph graph={graph} options={options} />
  )
}

export default memo(UrunlerGrafik)
