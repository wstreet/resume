import index from './index.md'
import './themes/resume.less'


const renderDownload = (root) => {
  const box = document.createElement('div')
  box.className = 'download iconfont icon-download'
  box.onclick = function() {
    window.print()
  }
  root.appendChild(box)
}


const render = (container, html) => {
  const root = document.querySelector(container)
  root.innerHTML = html
  renderDownload(root)
}

render('#root', index)