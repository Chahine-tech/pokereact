const express = require('express')
const router = express.Router()
const pokemons = require('../data/pokemon.json')


router.get('/', (req, res) => {
    res.json(pokemons)
})

router.get('/:id', (req, res) => {
    const pokemon = pokemons.find(p => p.numero === req.params.id)
    if(!pokemon) return res.status(404).send('the pokemon with the given number was not found')
    res.json(pokemon)
})



router.get("/:id", (req, res) => {
  const pokemon = pokemons.find(c => c.numero == parseInt(req.params.numero))
    if(!pokemon) return res.status(404).send('Pokemon not found')

    res.send(pokemon)
});

module.exports = router;