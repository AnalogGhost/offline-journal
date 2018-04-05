const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static('public/online'))
app.use(express.static('public/offline', {etag: false, setHeaders: noCacheHeaders}))

app.get('/',(req,res) => res.send('Hello World'))

app.listen(port, () => console.log(`Offline Journal listening on ${port}`))

function noCacheHeaders(res, path, stat) {
  console.log('set headers')
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': 0
  })
}