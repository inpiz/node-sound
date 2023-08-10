const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res) {
    res.send(`node-sound-add. It is port ${port}`)
})

app.get('/user/:id', function (req, res) {
    // const q = req.paramss
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
        res.json({'sound' : '명멍','img' : 'https://www.fitpetmall.com/wp-content/uploads/2023/02/CK_tc02730000546-edited-scaled.jpg'})
    } else if(name == "cat") {
        res.json({'sound' : '야옹','img' : 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg'})
    } else if(name == "pig") {
        res.json({'sound' : '꿀꿀','img' : 'https://dimg.donga.com/wps/ECONOMY/IMAGE/2020/11/16/103972000.2.jpg'})
    } else if(name == "lion") {
        res.json({'sound' : '어헝','img' : 'https://blog.kakaocdn.net/dn/tBRuZ/btq3YL7AgQx/MDrI6QhKOrW4d1qjhq1jOk/img.png'})    
    } else {
        res.json({'sound' : '얄수없음', 'img' : 'https://uic.yonsei.ac.kr/main/images/errorpage.jpg'})
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// 5초후 로그 출력 예제
setTimeout(() => { console.log(`5초지남`) }, 5000)