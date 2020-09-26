const fs = require('fs')
const http = require('http')
const { hostname } = require('os')
const path = require('path')
const url = require('url')
const router = require('./router')

const host = '127.0.0.1'
const port = 3000

const log = (method, route, status) => console.log(method, route, status)

const pickAsset = (file) => {
    const assetPath = path.resolve('src', 'templates', file)
    
    return new Promise((res, rej) => {
        fs.readFile(assetPath, {encoding: 'utf-8'}, (err, data) =>{
            if (err) { rej(err) }
            else { res(data) }
        })
    })
}

const server = http.createServer(async(req, res) => {
    const route = url.parse(req.url).pathname
    const method = req.method
    const match = router[`${route} ${method}`]
    
    if (!match) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        log(method, route, 404)
        res.end()
        return
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    console.log(match.asset)
    res.write(await pickAsset(match.asset))
    log(method, route, 200)
    res.end()
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
});