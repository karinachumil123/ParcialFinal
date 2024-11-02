const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/portials');

app.get('/', (req, res) => {
  res.render('home',{
      dato: "Vehículos",
      titulo: "Página principal /"
  })
});

app.get('/diesel', (req, res) => {
  res.render('diesel',{
      dato: "Vehículos",
      titulo: "Página principal /"
  })
});

app.get('/electricos', (req, res) => {
  res.render('electricos',{
      dato: "Vehículos",
      titulo: "Página principal /"
})
});

app.get('/gasolina', (req, res) => {
  res.render('gasolina',{
      dato: "Vehículos",
      titulo: "Página principal /"
})
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  