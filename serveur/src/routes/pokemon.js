const express = require('express')
const router = express.Router()
const pokemons = require('../data/pokemons.json')


router.get('/', (req, res) => {
    res.json(pokemons)
})

router.get('/:id', (req, res) => {
    const pokemon = pokemons.find(p => p.numero === req.params.id)
    if(!pokemon) return res.status(404).send('the pokemon with the given number was not found')
    res.json(pokemon)
})



module.exports = router;

