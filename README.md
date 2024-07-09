# Proyecto Backend E-commerce

Esta aplicación permite registrar usuarios, iniciar sesión y cuenta con un sistema de carrito de compras en línea que permite a los usuarios agregar productos a su carrito, gestionar su carrito y finalizar compras.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contacto](#contacto)

## Descripción

Este proyecto consta de una aplicación web desarrollada con Node.js, Express.js y MongoDB para el backend, y HTML, CSS y JavaScript para el frontend (vistas generadas en Handlebars). Cabe aclarar que se trata de un frontend muy simple ya que el objetivo del curso era centrarse en el backend. Utiliza Passport.js para la autenticación de usuarios y Mongoose para la interacción con la base de datos MongoDB. La aplicación proporciona una interfaz para que los usuarios puedan registrar una cuenta, iniciar sesión, navegar por los productos disponibles, agregar productos a su carrito, gestionar su carrito y finalizar la compra.

## Características

- Registro de usuarios
- Inicio de sesión
- Visualización de productos
- Agregar productos al carrito
- Eliminar productos del carrito
- Vaciar el carrito
- Finalizar compra

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, estan especificadas en el `.env.example`
5. Ejecuta `npm run dev` para iniciar el servidor.
6. Abre un navegador web y accede a `http://localhost:8080/home`.

## Uso

1. Explora los productos disponibles en la página de inicio.
2. Haz clic en el botón "Agregar al carrito" para agregar un producto a tu carrito. En este punto, si ya tienes una cuenta deberás iniciar sesión; caso contrario deberás registrar una nueva cuenta.
3. Ve a la página de carrito para ver los productos agregados, eliminar productos o finalizar la compra.

## Contacto

Si tienes alguna pregunta, sugerencia o comentario sobre este proyecto, por favor crea un issue o envía un pull request. 
Tambien podes contactarme port mail [dagustin001@gmail.com]
