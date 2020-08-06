import index from './index.md'
// import './theme.css'
import './themes/resume.less'

const render = (container, html) => {
  document.querySelector(container).innerHTML = html
}

render('#root', index)