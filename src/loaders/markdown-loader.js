
const { getOptions } = require('loader-utils')


// markdown-it 插件
const emoji = require('markdown-it-emoji')
const anchor = require('markdown-it-anchor')

// 自定义块
const containers = require('./containers')

const md = require('markdown-it')({
  html: true,
})
  // 使用 emoji 插件渲染 emoji
  .use(emoji)
  .use(containers) // 定义自定义的块容器
  


module.exports = function (src) {
  const html = md.render(src)

  return html
}