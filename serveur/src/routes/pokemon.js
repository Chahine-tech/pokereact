const express = require('express')
const router = express.Router()
const pokedex = require('../data/pokemons.json')

router.get('/', (req, res) => {
    res.json(pokedex)
})

router.get('/:id', (req, res) => {
    const pokemon = pokedex.map(x => x.id === parseInt(req.body.params))
    if(!pokemon) return res.status(404).send('the pokemon with the given id was not found')
})

module.exports = router;

