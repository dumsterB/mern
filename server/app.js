const express = require('express')
const bodyParser = require('body-parser')
const placesRoutes = require('./routes/places-routes.js')
const app = express()

app.use(placesRoutes)

app.listen(3000)