// Importando biblioteca para crear rutas absolutas o relativas de los recursos de la aplicación
//const path = require('path');

/* Es como un tipo 'import' library */
// 'require' traerá como tal el nombre dentro de la carpeta 'node_modules', en donde traerá su información.
// Importando la biblioteca 'express' para la creación de servidores
const express = require('express');     /* Esta variable traerá la biblioteca express*/ // Es como si apuntara al index.js
//const req = require('express/lib/request');
//const res = require('express/lib/response');

// Crear el servidor
const app = express();
const personaRoutes = require("./routes/persona");

//Crear Un Middleware
app.use(express.json());
    //app.use(express.static(path.join(__dirname,'public')));
app.use('/persona', personaRoutes);
// Configurar el servidor para capturar instrucciones

        // Pero antes se usa el método GET para recibir información
        // PARA ESTE CÓDIGO SE HARÁ LA PETICIÓN DE REQUERIMENTS Y RESPONSEB

// Respuesta a método GET con un mensaje de texto
app.get('/test',(request, response)=>{   //Configura el servidor
    console.log('Servicio de prueba');
    response.send('<h1> Servidor en línea </h1>');
    // Se usa cuando le pedimos un recurso al servido

}); //Ponerle mi URL al servidor

// El POST 

// Levantar el server y escuchar la petición
app.listen(8080, ()=>{
    console.log('Servidor escuchando')
});