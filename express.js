const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Bievenue!')
})

app.get('/accueil', (req, res) => {
    res.send("Vous êtes a l'accueil")
    console.log("Vous êtes a l'accueil")
})

app.get('/Logo', (req, res) => {
    res.send("<img src='https://i0.wp.com/face-sud-provence.org/wp-content/uploads/2017/05/epitech-marseille-900x600.jpg?ssl=1'>")
    console.log("Vous êtes au logo")
})

app.get('/profile', (req, res) => {
    res.send("Vous êtes au profile")
    console.log("Vous êtes sur votre profile")
})

app.listen(port, () => {
  console.log(`serveur créer: ${port}`)
})