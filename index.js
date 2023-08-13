const express = require('express')


const app = express()

const facts = [
    'Dogs can smell upto 40x better than humans',
    'Dogs can smell while breathing freely',
    'Some dogs can detect medical conditions in humans by smelling',
    'Some dogs can swim well',
    'Some dogs can beat a cheetah in a race',
    'Dogs don\'t sweat like humans',
    'Like humans, dogs also have a dominant forelimb. Your dog could be left-pawed or right-pawed!',
    'A dog\'s intelligence can be compared to a two-year-old human child',
    'Dogs have super sensitive hearing',
    'Similar to human fingerprints, a dog\'s nose print is unique too'

]


app.get("/", (req, res) => {
    console.log("Request received at /")
    res.json({"message": "Hello world!"});
})

app.get("/fact", (req, res) => {
    console.log("Request received at /fact")
    
    const index = Math.floor(Math.random() * 10)

    console.log(index)

    res.json({"fact": facts[index]})
})

app.listen(8080)