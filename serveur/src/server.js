const express = require('express')
const app = express()
const arg = process.argv


app.listen(arg[2], function() {
    console.log(
      "Server is listening on http://localhost:"+arg[2]
    );
  });
