//Using express object 
const express = require('express')
//Express app
const app = express()
app.use(express.json()) //point out we are using json
//Port used to see our app: localhost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Zabdi1"}
    const explorer2 = {id: 2, name: "Zabdi2"}
    const explorer3 = {id: 3, name: "Zabdi3"}
    const explorer4 = {id: 4, name: "Zabdi4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)

})

//Second GET
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer= {id: 1, name: "Zabdi"}
    res.status(200).json(explorer)
})

// this starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})