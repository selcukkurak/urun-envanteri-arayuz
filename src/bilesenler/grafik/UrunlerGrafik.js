import Sigma, { EdgeShapes, Filter, RandomizeNodePositions, RelativeSize } from 'react-sigma'
import { nodelaraCevir } from './urunler-util'
import useFiltreliUrunler from '../listeler/hook/useFiltreliUrunler'
import ForceLink from 'react-sigma/lib/ForceLink'

const settings = {
  defaultNodeColor: '#ab2328',
  drawEdges: true,
  clone: true,
  animationsTime: 3000,
  edgeColor: 'default',
  defaultEdgeColor: '#d79996',
  borderSize: 1,
  defaultNodeBorderColor: '#5b080b',
  minArrowSize: 4
}

function UrunlerGrafik (props) {
  const urunler = useFiltreliUrunler(null)
  console.debug('Ürünler', urunler)

  if (urunler.length === 0) return <div>Yükleniyor...</div>

  const urunGraph = nodelaraCevir(urunler)
  console.debug('Graph', urunGraph)

  const filterNodes = node => {
    return urunGraph.nodes.some(n => n.id === node.id)
  }

  return (
    <Sigma renderer='webgl' graph={urunGraph} settings={settings} style={{ height: 'calc(100vh - 114px)', maxWidth: 'inherit' }}>
      <EdgeShapes default="arrow"/>
      <Filter nodesBy={filterNodes} />
      <RandomizeNodePositions>
        <ForceLink
          linLogMode
          timeout={3000}
          worker
          backrgound
        />
        <RelativeSize initialSize={32} />
      </RandomizeNodePositions>
    </Sigma>
  )
}

export default UrunlerGrafik
