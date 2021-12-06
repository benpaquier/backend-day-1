const express = require("express")
const app = express()
const axios = require('axios')
const port = 5000

const pokemons = [
  { name: "bulbizar", id: 1 },
  { name: "mewtww", id: 2 },
  { name: "chenipan", id: 3 }
]

app.get('/', (req, res) => {
  res.send("Hello benoit")
})

app.get('/hello', (req, res) => {
  res.send("Hello from '/hello' route")
})

app.get('/hello/edouard', (req, res) => {
  res.send("Hello Edouard")
})

app.get('/nimportequoi', (req, res) => {
  res.send("nimportequoi")
})

app.get('/bonjour/:name', (req, res) => {
  res.send(`Bonjour ${req.params.name}`)
})

app.get('/bonjour/:name/age/:age', (req, res) => {
  const { name, age } = req.params
  res.send(`Bonjour, je m'appelle ${name} et j'ai ${age} ans`)
})

app.get('/pokemons', (req, res) => {
  res.send(pokemons)
})

app.get('/pokemons/:id', (req, res) => {
  const { id } = req.params
  const pokemon = pokemons.find(p => p.id === Number(id))
  res.send(pokemon)
})

app.get('/steak', (req, res) => {
  res.json({
    cuisson: 'saignant',
    poids: '300g',
    race: 'wagyu'
  })
})

app.get('/fetch-example', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.get('*', (req, res) => {
  res.status(404).send("Not found")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
