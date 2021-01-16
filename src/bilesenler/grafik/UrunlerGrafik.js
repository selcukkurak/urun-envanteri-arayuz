import Sigma, { EdgeShapes, Filter, NodeShapes, RandomizeNodePositions, RelativeSize } from 'react-sigma'
import { nodelaraCevir } from './urunler-util'
import ForceLink from 'react-sigma/lib/ForceLink'
import useFiltreliUrunler from '../listeler/hook/useFiltreliUrunler'

const settings = {
  defaultNodeColor: '#ab2328',
  drawEdges: true,
  clone: false,
  animationsTime: 1000,
  edgeColor: 'default',
  defaultEdgeColor: '#d79996',
  borderSize: 1,
  defaultNodeBorderColor: '#5b080b',
  enableEdgeHovering: true,
  edgeHoverExtremities: true,
  minArrowSize: 4
}

function UrunlerGrafik (props) {
  const urunler = useFiltreliUrunler(null)
  console.debug('Ürünler', urunler)

  if (!urunler) return <div>Yükleniyor...</div>

  const urunGraph = nodelaraCevir(urunler)
  console.debug('Graph', urunGraph)

  const filterNodes = node => {
    return urunGraph.nodes.some(n => n.id === node.id)
  }

  return (
    <Sigma renderer='canvas' graph={urunGraph} settings={settings} style={{ height: 'calc(100vh - 114px)', maxWidth: 'inherit' }}>
      <EdgeShapes default="arrow"/>
      <Filter nodesBy={filterNodes} />
      <RandomizeNodePositions>
        <ForceLink
          background
          barnesHutTheta={0.5}
          barnesHutOptimize={true}
          easing="cubicInOut"
          edgeWeightInfluence={0}
          gravity={1}
          linLogMode
          randomize="locally"
          timeout={3000}
          worker
        />
        <RelativeSize initialSize={32} />
      </RandomizeNodePositions>
    </Sigma>
  )
}

export default UrunlerGrafik
