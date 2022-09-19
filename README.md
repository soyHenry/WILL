# HENRY CHALLENGE - JavaScript

### Bienvenido al Henry Challenge sobre JavaScript para la carrera Full Stack Developer.

<p style="color:#f92850; font-size: 16px; text-align:center;">¡ Por favor lee TODO este material con atención !</p>

## INTRODUCCION

El Henry Challenge es un desafío técnico donde evaluamos conceptos básicos sobre JavaScript.
En esta instancia, buscamos asegurarnos que todos nuestros aplicantes  tengan una base de conocimientos mínimos necesarios para luego seguir aprendiendo temas nuevos.

Hay cosas puntuales que tal vez no vimos específicamente en el material del Prep Course, vas a tener que investigar un poquito por tu cuenta (Google es tu mejor amigo 🤗).

>El Challenge debe resolverse de manera individual. Si te copias o recibes ayuda de compañeros, además de estar incumpliendo con las normas de Henry (lo que te dejaría afuera de la carrera), estarás perjudicándote a ti mismo, porque el primer día de clase estarías extremadamente perdido.

¿Se puede volver a rendir el HC?    
-   Si, el HC se puede rendir tantas veces como ustedes quieran! No hay límite de intentos.

¿Qué hago una vez entregado el HC?
- ¡A esperar! Los van a estar contactando en un plazo no mayor a una semana para confirmarles, tanto si quedaron, como si no lo hicieron.



## PASOS PARA RESOLVER EL CHECKPOINT:

### 1. Clonar

Vas a recibir un enlace al repo que esta alojado en nuestro github
`checkpoints-soyhenry` 

Una vez que aceptes la invitacion al repo vas a poder clonar lo 
>Es importante que no hagas Fork, los cambios subidos a un repo fork no seran validos.

Para clonar el repo te recomendamos crear una nueva carpeta,  (asegurate de no utilizar la misma que el prep curse). Una vez clonado entrá a esa carpeta y ejecutá los siguientes comandos:

    npm install
    npm test

>Si ves los tests fallando, estás listo para comenzar, si no lee bien el output para identificar el error.


### 2. RESOLVER EL CHALLENGE

Tu tarea es completar el código en los archivos  
 - `01.js` 
 - `02.js` 
 - `03.js` 
 - `04.js` 
 - `05.js` 
 - `06-07-08.js` 
 - `09.js` 
 
 De tal forma que pasen la mayoría de los tests.


### 3. ENTREGAR TU CHECKPOINT

Correr por ultima vez los tests y verificar cuantos pasan. Ten en cuenta que si te aparece "1 failed;1 total" es porque tienes un error de sintaxis: seguramente falta o sobra una llave, paréntesis, punto y coma, etc.
Saca un print de pantalla de tus tests.
Luego, debes subir un commit a tu repo. Para hacerlo, debes ejecutar el siguiente comando:

    git add .
    git commit -m 'checkpoint commit'
    git push origin main

Una vez finalizado, chequea:
1. Que veas los cambios reflejados en el repo de la cuenta de `checkpoints-soyhenry` (entrando al link brindado anteriormente.)
2.  Que no haya un require - solo debe haber codigo dentro de las funciones de cada ejercicio 


<img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/26a0-fe0f@2x.png" style="float:left; width:35px; padding: 10px;" /> Atención: no debes realizar un commit después de la hora de entrega porque se anulara la totalidad del examen. 
>Revisar la hora del entrega del examen en los emails que te llegaron. 

### ¿TENES ALGUN PROBLEMA / CONSULTA?

1. Busca la solución en la "guía de errores comunes".

2. Si no la encuentras, revisa el canal de #henry_challenge en Slack. Probablemente a algún compañero le paso algo similar y ya lo consulto.

3. Si no encuentras la respuesta, puedes publicar un mensaje en dicho canal.

> No se puede hacer consultas sobre la resolucion de los ejercicios.


### GUIA DE ERRORES COMUNES

Para identificar el error, vas a tener que leerlo en la consola.


* "jest" no se reconoce como un comando externo o interno...:
    1. Borrar la carpeta `node_modules` y el archivo `package-lock.json` e instalar nuevamente ( `npm install` ).
    2. Si esto no funciona, instalar test con el comando `npm install jest`.


* 1 failed, 1 total:
    1. Tenes un error de sintaxis. Revisa el último ejercicio que hayas hecho, seguramente falta o sobra una llave, paréntesis, punto y coma, etc.

* Author identity unknown.  
    1. Intenta ejecutar los siguientes comandos para configurar tu cuenta:
        * git config --global user.name "Tu usuario de GitHub aca"
        * git config --global user.email "Tu email aca"

    2. Ingresa a [Github](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) y sigue las instrucciones para configurar tu token. 

* La consola se tilda en `Runs`:
    1. Revisa tu código, tenes un bucle infinito. Tenes que checkear la condición de corte de tus bucles.

