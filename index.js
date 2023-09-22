const express = require('express')
const app = express()
const port = 1104

app.get('/', (req,res)=> {
    res.send('Helo World')
})


app.listen(port, ()=> {
    console.log(`Dang lang nghe http://localhost:${port}`)
})