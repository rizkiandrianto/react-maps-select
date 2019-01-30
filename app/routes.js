const routes = require('next-routes')();

module.exports = routes
.add({
    name: 'contoh',
    page: 'contoh'
})
.add('index', '/');
