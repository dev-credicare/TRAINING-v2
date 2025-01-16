
document.getElementById('btn').addEventListener("click",  () => {
    console.log('test')
fetch('http://localhost:3000/getEmail', {
    method:"GET"
}).then(response => {
    response.json().then(email => {
        document.getElementById('email').innerHTML = `Email: ${email.email}`

    })
})

})


document.getElementsByClassName('cat')[0].addEventListener("click",  () => {
    console.log('test')
fetch('http://localhost:3000/catFact', {
    method:"GET"
}).then(response => {
    response.json().then(fact => {
        console.log(fact)
        document.getElementsByClassName('cat-text')[0].innerHTML = `Cat Fact: ${fact.fact}`
        
    })
})

})