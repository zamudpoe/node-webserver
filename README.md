#  95. Desplegar Aplicación en Railway.app

Para la parte Web necesitamos un servicio que pueda procesar las peticiones lo cual nos dara un cierto poder de procesamiento en el Backend!.

Hay muchos servicios populares como: 

* Firebase Hosting
* Microsoft Azure
* Digital Ocean
* Google Claud
* Heroku 
* Amazon Web Services
* [Railway] 

> **NOTA :** La mayoria como las mas populares nos pediran una tarjeta de credito valida para el periodo gratuito y despues nos realizaran los cobros correspondientes!. 

Nosotros vamos a utilizar **``Railway``** por que aparte de tener su capa **GRATUITA** , que es bastante bueno , nosotros lo podremos utilizar para produccion perfectamente y **no nos va a pedir ninguna tarjeta de credito!** , 

Para subir a ``Railway`` es sumamente sencillo!, lo unico vamosa a ocupar es crearnos nuestra cuenta.  
  > **TIP:** Firmarnos en ``Railway`` usando nuestra cuenta ``Github``



## Preparar archivo **``.gitignore``** 

Preparamos lo que queremos ignorar en nuestro archivo **``.gitignore``** 

``txt
# Ignorar node_modules/
node_modules/

# Este archivo es para ambiente local 
.env 

``

## Realizamos nuestro primer commit

Realizamos nuestro primer commit. 

  ```
  git init 
  git add . 
  git commit -m "Webserver listo!"

  ```

### Creamos en github un nuevo repositorio llamado ``node-webserver/`` de forma publica 

Una vez que lo creamos se nos entrega la siguiente inforomacion con los comandos para realizar nuestros cambios al repositorio.

#### or Create a new repository on the command line

```
echo "# node-webserver" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/zamudpoe/node-webserver.git
git push -u origin main
```
#### …or push an existing repository from the command line

```
git remote add origin https://github.com/zamudpoe/node-webserver.git
git branch -M main
git push -u origin main
```
> **NOTA :** Estos son los comandos que vamos a ocupar 

Una vez realizado procedemos a consultar nuestro repositorio [node-webserver-railwayapp] en github para apreciar que ya esta subido nuestro proyecto.

Ahora cada vez que realizemos algun cambio que deseemos subir 

```
git add . 

git commit -m "2do commit"

git push -u origin main
```

## Desplegar en railway desde github

1. Le damos click a nuevo proyecto 
1. le damos a "Deploy from github repo" 
1. En la ventana emergente escogemos : "Only select repositories" y elegimos nuestro repositorio "node-webserver" 
1. Confirmamos nuestro password de github
1. le damos en ``deploy now`` y listo 

Cuando termine de hacer el despliegue desde **github** nos lo informara con el mensaje de **"success"** en el dashboard de nuestro proyecto. 


## Configuracion de variables de entorno.

En el dashboard del proyecto , en la pestaña ``Variables`` crearemos nuestras variables de entorno dandole click "+ New Variable" 

* Port 

## Exponer el servicio al acceso publico (internet)

1. Le damos click derecho sobre el proyecto en el dashboard.
1. Escogemos **"View Settings"**
1. Le damos a **"Generar Domain"** 
   * nos eentregara una url donde estara desplegada nuestra aplicacion , en nuestro caso es [node-webserver-railwaysapp] 





--- 

[Railway]:(https://railway.app/)
[node-webserver-railwayapp]:(https://github.com/zamudpoe/node-webserver)
[node-webserver-railwaysapp]:(https://node-webserver-production.up.railway.app/)
