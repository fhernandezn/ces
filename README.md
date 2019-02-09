# CES(Control escolar)
Sistema para llevar el control de alumnos en escuelas primarias. Cuenta con diversos modulos para el manejo de alumnos, calificaciones, horarios y pagos

- CES Modulo Alumnos
- CES Modulo Examenes
- CES Modulo Calificaciones
- CES Modulo Horarios
- CES Modulo Pagos


## Instalacion
- npm install -g concurrently nodemon
- npm install

## Base de datos
- Crear la base de datos `ces` en `postgres`

## Variables de entorno
Crea tu propio archivo de configuracion de variables `.env` a partir del archivo de ejemplo `.env.example`

PORT: puerto donde corre el servidor de node

## Testing
- cd ces && npm run test

## Run
- npm run start:dev

