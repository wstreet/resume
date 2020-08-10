const container = require('markdown-it-container')

module.exports = md => {
  md
    .use(...createContainer('tip'))
    .use(...createContainer('info'))
    .use(...createContainer('warning'))
    .use(...createContainer('danger'))
    .use(...createContainer('information'))
    
    
}

function createContainer (klass) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      if (token.nesting === 1) {
        return `<div class="${klass} custom-block">\n`
      } else {
        return `</div>\n`
      }
    }
  }]
}