const express = require('express')
const app = express()
const port = 3000
const data = require('./dataSet.json')
app.use(express.static(__dirname+ '/public'));
const axios = require('axios')

app.get('/catFact', (req,res) => {

axios.get('https://catfact.ninja/fact', {
    header:{
        
    }
})
.then(function(fact) {
    console.log(fact.data);

    res.send(JSON.stringify(fact.data))

})
.catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
})
function randomEmail() {
        let rNumber= Math.floor(Math.random()*data.length)
        return {email:data[rNumber].email}
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/osama', (req, res) => {
    res.sendFile(__dirname+ '/public/test.html')
  })
app.get('/getEmail', (req,res) => {
    let test = randomEmail()
    res.send(test)
})
app.get('/bob', (req, res) => {
    res.sendFile(__dirname+ '/public/bob.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    