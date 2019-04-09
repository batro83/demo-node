const express = require('express');
const indexRouter = require('./routes/index');
const deviceRoutes = require('./routes/devices.routes');
const transmittersRoutes = require('./routes/transmitters.routes');
const app = express()
const port = 3000


app.use('/devices', deviceRoutes);
app.use('/transmitters', transmittersRoutes); 



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server started at ${port}`)
})