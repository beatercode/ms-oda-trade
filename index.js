const express = require('express')
const trade = require('./routers/trade')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('ODA Trades is Online')
})

app.use(express.json())
app.use('/trade', trade)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})