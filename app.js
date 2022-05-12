//Using express object 
const requires =('express')
//Express app
const app = express()
app.use(express.json()) //point out we are using json
//Port used to see our app: localhost:3000
const port = 3000

// this starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})