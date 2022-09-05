# Desafío para Software Engineers

## Table of Contents
1. [General Info](#general-info)
2. [Installation](#installation)
3. [Consigna](#consigna)
### General Info
***

Nombre postulante: [NELSON ESCURRA](https://github.com/Nelnico08)

Link a la app en producción: [DEPLOY](https://kimche-challenge-self.vercel.app/)

***
## Installation
***
A little intro about the installation. 
```
$ git clone https://github.com/Nelnico08/kimcheChallenge.git
$ cd ../path/to/the/file/kimcheChallenge
$ npm install
$ npm start
```
## Consigna
***
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Para este tipo de problema, propondría cambiar a una base de datos noSQL. Una base de datos no relacional nos daría mejores tiempos de respuesta, ya que estas están diseñadas para mejores tiempos de respuesta para base de datos de miles o millones.