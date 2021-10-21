const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//[ make api users 
const users = [
    {id : 0, name: 'Sabana', email : 'Sabana@gmail.com', phone: '01424617424'},
    {id : 1, name: 'Sabnoor', email : 'Srabonti@gmail.com', phone: '01424617424'},
    {id : 2, name: 'Susmita', email : 'Susmita@gmail.com', phone: '01424617424'},
    {id : 3, name: 'Sriti', email : 'Sriti@gmail.com', phone: '01424617424'},
    {id : 4, name: 'Sahina', email : 'Sahina@gmail.com', phone: '01424617424'},
    {id : 5, name: 'Sathe', email : 'Sathe@gmail.com', phone: '01424617424'}
]

// number : 01 
// call system ]
app.get('/users', (req, res) => {
    const search = req.query.search
    // use query paramitar
    if (search) {
        const searchResult = users.filter(user.user.name.ToLocalLowerCase().includes(search))
    }
    else{
        res.send(users)
    }

});

// app.MATHOD
app.post('/users', (req, res)=>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api, id diye ak akta details dekhano hbe 
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

// number : 02 
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana', 'orange'])
})

app.get('/fruits/mango/fazli' , (req, res) => {
    res.send('yummy yummy fazli but tok')
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })