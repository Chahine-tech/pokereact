const express = require('express')
const app = express()
const arg = process.argv

const pokemons = require('./routes/pokemons')

app.listen(arg[2], () =>  {
    console.log(
        `Server is listening on http://localhost:${argv[2]}`
    );
  });
