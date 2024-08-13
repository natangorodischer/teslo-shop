# Descripción

## Correr en desarrollo

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Crear una copia de `.env.template`, renombrarla a `.env`, y ajustar las variables de entorno según sea necesario.
4. Levantar la base de datos con Docker: ```docker compose up -d```.
5. Correr las migraciones de Prisma: ```npx prisma migrate dev```.
6. Ejecutar seed ``` npm run seed ```
7. Correr el proyecto. `` Npm run dev `` 

## Correr en producción

(Puedes agregar aquí las instrucciones específicas para correr en producción si tienes alguna)
