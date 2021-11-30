const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('docs'));



app.listen(port, () => {
    console.log('Server is running and listening on port http://localhost:'+port);
})