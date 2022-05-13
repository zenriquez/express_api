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


//First POST create explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({message: "Created"})
})


//PUT creates an endpoint that updates an explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de cliente
    res.status(200).json({message: "Updated!"})
}) 


//DELETE create an endpoint to eliminate an explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de cliente
    res.status(200).json({message: "Deleted"})
})


// this starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})