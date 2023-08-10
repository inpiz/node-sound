const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res) {
    res.send(`Hello World. It is port ${port}`)
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)


    res.json({'userid' : q.name})
})



app.get('/cat', function (req, res) {
    res.send({'sound' : '야옹'})
})


app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    console.log(name)

    if(name == "dog") {
        res.json({'sound' : '명멍'})
    } else if(name == "cat") {
        res.json({'sound' : '야옹'})
    } else if(name == "pig") {
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound' : '얄수없음'})
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// 5초후 로그 출력 예제
setTimeout(() => { console.log(`5초지남`) }, 5000)