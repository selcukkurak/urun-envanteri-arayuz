import { createGlobalStyle } from 'styled-components'
import { Colors } from '@blueprintjs/core'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.LIGHT_GRAY5};
  }
  
  .vis-tooltip {
    position: absolute;
    background: white;
    padding: 4px 8px;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
  }
`

export default GlobalStyle
