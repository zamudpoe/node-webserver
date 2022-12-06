require('dotenv').config() // Cargar configuracion de .env 

const express   = require('express') 
const hbs       = require('hbs') 
const app       = express() 
const port      = process.env.PORT || 8080 

/* -------------------------------------------------------------------------- */
/*             Configuracion del motor de plantillas - Handlebars             */
/* -------------------------------------------------------------------------- */
app.set('view engine', 'hbs')  // Buscara en views/ archivos .hbs

hbs.registerPartials( __dirname + '/views/partials',  err => { 
  console.log( `${ err }`,err )
} ) 


/* 
  Usar el modelo MVC. 
  La idea de usar Handlebars es que tengamos separado lo que es 
  - La vista 
  - El modelo 
  - El controlador

  Renderizamos las plantillas en la carpeta views/ asi sin la extension .hbs : 
    - views/plantilla.hbs
    - res.render('plantilla') 
*/

/* 
  ::::::::::::::::::::::::::::::::::::::::::::::::::[ MIDDLEWARES ] ==>[ INICIO ] 
    Hacemos publica ó 'servimos' la carpeta 'public/' 
    Primero buscara aqui y despues en sus rutas! 
*/

app.use( express.static('public') )  
/* ::::::::::::::::::::::::::::::::::::::::::::::::::[ MIDDLEWARES ] <==[ FIN ] */

/* --------------------------- [ MANEJO DE RUTAS ] -------------------------- */
app.get('/', function (req, res) {  

  /* La funcion render fungira como nuestro controlador */   
  res.render( 'home', { 
    titulo : `Curso de Node` , 
    nombre : `Engelbert Zamudio`,  
    clase  : `` 
  } ) 

}) 

app.get('/generic', function (req, res) {  

  // Reenderizamos la plantilla generic.hbs 
  res.render('generic', { 
    titulo : 'Road Trip' , 
    nombre : 'by TEMPLATED' , 
    clase  : `alt` 
  }) 

}) 

app.get('/elements', function (req, res) {      

  // Reenderizamos la plantilla elements.hbs
  res.render('elements', { 
    titulo : 'Road Trip' , 
    nombre : 'by TEMPLATED' ,  
    clase  : `alt`
  })

}) 

app.get('*', function (req, res) { 

  /* res.sendFile( __dirname + '/public/back/404.html' )  */
  res.render('404' , { 
    titulo : '404 | Pagina no encontrada', 
    href   : 'Ir a home page' 
  }) 

}) 
/* -------------------------[ FIN DE MANEJO DE RUTAS ]------------------------- */


/* -------------------------------------------------------------------------- */
/*                             Iniciando el server                            */
/* -------------------------------------------------------------------------- */
app.listen( port, 
  () => console.log( `::::[ Servidor Escuchando en puerto ==> ${ port } <== ]::::` ) 
) 

