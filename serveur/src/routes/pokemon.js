const express = require('express')
const router = express.Router()
const pokemons = require('../data/pokemons.json')

router.get('/', (req, res) => {
    res.json(pokemons)
})


module.exports = router;

