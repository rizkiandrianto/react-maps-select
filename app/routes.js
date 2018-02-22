const routes = module.exports = require('next-routes')()

routes
.add({
    name: 'about',
    page: 'contoh'
})
.add({
    name: 'contoh',
    page: 'contoh/example'
})
.add('index', '/')
// .add('contoh', 'contoh/example.js')
// .add('/', 'contoh')