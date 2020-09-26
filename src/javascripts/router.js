const mime = require('mime')
const path = require('path')

const router = {
    '/ GET': {
        asset: 'index.html',
        mime: mime.getType('html')
    },
    '/index.js GET': {
        asset: path.resolve('src', 'javascripts', 'index.js'),
        mime: mime.getType('js')
    }
}

module.exports = router