// Based on Express hello world example
// https://expressjs.com/en/starter/hello-world.html

import express from "express";
const app = express()
const port = 3099

let count = 0
app.get('/', (req, res) => {
    res.send(++count + ' Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})