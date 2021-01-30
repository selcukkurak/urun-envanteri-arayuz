import { nodelaraCevir } from './urunler-util'
import Graph from 'react-graph-vis'
import { memo, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { urunlerState } from '../store'

const options = {
  nodes: {
    shape: "dot",
    scaling: {
      min: 4,
      max: 16,
      label: {
        min: 4,
        max: 8,
        drawThreshold: 4,
        maxVisible: 24
      }
    },
    font: {
      size: 12,
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
  physics: { stabilization: true },
  height: "700px"
}

function UrunlerGrafikYeni (props) {
  const urunler = useRecoilValue(urunlerState)
  console.debug('Ürünler', urunler)

  const graph = useMemo(() => {
    if (urunler.length === 0) return null

    return nodelaraCevir(urunler)
  }, [urunler])
  console.debug('Graph', graph)

  if (!graph) return <div>Yükleniyor...</div>

  return (
    <Graph graph={graph} options={options} />
  )
}

export default memo(UrunlerGrafikYeni)
