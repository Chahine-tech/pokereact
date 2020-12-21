const express = require('express')
const app = express()
const arg = process.argv

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`the server is listening on port ${port}`))



app.listen(arg[2], function() {
    console.log(
      "Server is listening on http://localhost:"+arg[2]
    );
  });
