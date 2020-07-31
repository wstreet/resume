import index from './index.md'
import './theme.css'

const render = (container, html) => {
  document.querySelector(container).innerHTML = html
}

render('#root', index)