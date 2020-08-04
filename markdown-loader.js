
const { getOptions } = require('loader-utils')


// markdown-it 插件
const emoji = require('markdown-it-emoji')
const anchor = require('markdown-it-anchor')
// const toc = require('markdown-it-table-of-contents')

// 自定义块
const containers = require('./containers')

const md = require('markdown-it')({
  html: true,
  // 代码高亮
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) {}
    }

    return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
  // 使用 emoji 插件渲染 emoji
  .use(emoji)
  .use(containers)
  // 使用 anchor 插件为标题元素添加锚点
  // .use(anchor, {
  //   permalink: true,
  //   permalinkBefore: true,
  //   permalinkSymbol: '#'
  // })
  
  // 使用 table-of-contents 插件实现自动生成目录
  // .use(toc, {
  //   includeLevel: [2, 3]
  // })
  // 定义自定义的块容器
  


module.exports = function (src) {
  const isProd = process.env.NODE_ENV === 'production'
  const isServer = this.target === 'node'
  const options = getOptions(this)
  const loader = Object.create(this)
  



  const html = md.render(src)
  console.log(html)

  return html
}