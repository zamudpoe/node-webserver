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




--- 

[Railway]:(https://railway.app/)