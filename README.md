# Simulación de Henry Challenge para Practicar - JAVASCRIPT

## Lee con atención todo el material.

---

<br/>

## **INTRODUCCIÓN**

¡Bienvenid@ a esta prueba técnica 😁! En este repositorio encontrarás un modelo del Henry Challenge que podrás utilizar como autoevaluación, y así comprobar que estás listo para aprobar el Challenge.

En este desafío técnico podrás practicar conceptos básicos sobre Javascript estudiados durante el Prep Course. El objetivo es que puedas chequear cuáles son tus conocimientos sólidos, y que conceptos podrías ajustar un poco más🤩.

Encontrarás algunos ejercicios en los que se piden cosas puntuales que tal vez no vimos en el Prep Course, pero descuida, ¡porque es a propósito! Lo ideal es que comiences a pulir tus habilidades de investigación, ya que en el mundo de la programación Google es nuestro mejor amigo.

Es importante que puedas resolver todos los ejercicios que contiene este repositorio, así como también seguir todo el procedimiento a continuación.

---

<br />

## **¿CÓMO RESOLVER ESTA PRUEBA TÉCNICA?**

### **_1. CLONAR_**

El primer paso es clonar correctamente este repositorio en tu computadora. Para esto, te recomendamos crear una nueva carpeta (asegúrate de no utilizar la misma que el Prep Course). Si no recuerdas cómo clonar un repositorio, puedes revisarlo **[aquí](https://prep.soyhenry.com/primeros_pasos/)**.

Es importante que no hagas fork. El día del Challenge, los cambios subidos a un repositorio forkeado no serán válidos.

### **_2. INSTALAR DEPENDENCIAS Y CHEQUEAR TESTING_**

Desde tu terminal, dirígete al directorio en el que hayas clonado este repositorio. Una vez allí, tendrás que pararte en la carpeta raíz (la que envuelve todo), y ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

Luego de instalar las dependencias, tendrás que revisar si los testing funcionan correctamente. Si ves los tests fallando, ¡estás list@ para comenzar! Si no, lee bien la terminal para identificar el problema.

```bash
npm test
```

### **_3. RESOLVER LOS EJERCICIOS PROPUESTOS_**

Tu tarea es que pasen la mayoría de los test, completando los siguientes archivos:

-  `01.js`
-  `02.js`
-  `03.js`
-  `04.js`
-  `05.js`
-  `06-07-08.js`
-  `09.js`

### **_4. ENTREGAR LA PRUEBA TÉCNICA_**

Si bien esta prueba es opcional y la entrega no es obligatoria, es muy importante que practiques este paso dado a que suele traer muchas dudas y complicaciones el día del examen.

Primero corre por última vez los test y verifica cuántos pasan para asegurarte de estar entregando todo correctamente. Luego tendrás que ejecutar los siguientes comandos desde tu terminal:

```bash
git add .
git commit -m ‘checkpoint commit’
git push origin main

```

---

<br />

## **PREGUNTAS FRECUENTES**

### **🤔 ¿Cuántas veces lo puedo completar?**

¡Todas las que quieras! No hay límite.

### **😦 ¿A quién o en dónde debo entregarlo una vez resuelto?**

A nadie y en ningún lugar. Este material es para que puedas chequear tu mismo en qué situación te encuentras.

### **🤨 ¿Qué sucede si no puedo avanzar en un ejercicio?**

¡Descuida! No tienes tiempo límite para resolverlo. Por lo que puedes investigar en internet, volver a ver las clases del Prep Course e incluso repasar las homeworks que hayas completado.

### **🤓 ¿Si luego de seguir investigando no puedo avanzar con un ejercicio?**

Te recordamos que en slack podrás hacer consultas.

### **😲 ¿Por qué cuando ejecuto el testing la terminal dice que mi PC se quedó sin memoria?**

Lo más probable es que en tu código haya un bucle infinito, por lo que deberás revisarlo y buscar una solución.

### **😗 ¿Qué hay que hacer con el archivo package.json?**

Absolutamente nada. Más adelante, cuando estés estudiando en el bootcamp aprenderás para qué sirve este archivo. Pero en este momento, no lo modifiques ni lo elimines, ya que es importante.

---

<br />

## **GUÍA DE ERRORES COMUNES**

<p style="color: #f92850; font-weight: bold;">"jest" no se reconoce como un comando externo o interno...</p>

Si lees esto en la terminal, borrar la carpeta node_modules y el archivo package-lock.json y vuelve a ejecutar el comando:

```bash
npm install
```

<p style="color: #f92850; font-weight: bold;">1 failed, 1 total</p>

Debes tener un error de sintaxis. Revisa los ejercicios que hayas hecho, y asegúrate que no falte o sobre una llave, un paréntesis, un punto y coma, etc.

<p style="color: #f92850; font-weight: bold;">Author identity unknown</p>

Intenta ejecutar los siguientes comandos desde tu terminal para configurar tu cuenta:

```bash
git config –global user.name "_aquí escribe tu usuario de GitHub_"
Git config –global user.email "_aquí escribe tu email_"
git push origin main

```

---

<br />

## **DOCUMENTACIÓN**

Te compartimos un poco de documentación para facilitarte algunas respuestas. ¡Pero puedes investigar en todos los lados que tu quieras!

-  [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
-  [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
-  [Object](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)
-  [Class](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
-  [Prototypes](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)

---

<br />

## **💪¡MUCHA SUERTE!👊**
