const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

app.get('/api/anime/', (req, res) => {
  res.send({
    title: 'Tokyo Revengers',
    description: 'Description blah'
  })
})

console.log(`Listening on http://localhost:${PORT}`)
app.listen(PORT)