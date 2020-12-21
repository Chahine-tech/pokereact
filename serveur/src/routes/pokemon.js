const express = require('express')
const router = express.Router()


const pokemons = require('../data/pokemons.json')

router.get('/', (req, res) => {
    res.json(pokemons)
})


router.get("/:id", (req, res) => {
  const pokemon = pokemons.find(c => c.numero == parseInt(req.params.numero))
    if(!pokemon) return res.status(404).send('Pokemon not found')



    res.send(pokemon)
});

module.exports = router;