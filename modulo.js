import { contador, alerta } from "./contador.js";
import { promesa } from "./promesa.js";
import { asincrono } from "./async.js";
import { trycatch } from "./trycatch.js"

const async = document.getElementById("async")
contador()
// alerta()

// las promesas no se leen directamente llamando a la funcion, ya que este daria una respuesta compleja que no es lo que buscamos


promesa(true)
    .then((response) => {//con la promesa usamos el then para controlar las respuestas correctas y poder hacer uso de ellas segun lo que nos plazca
        // el then funciona con una funcion de flecha que se encarga de leer las respuestas para luego poder hacer con eso lo que queramos
        async.textContent = response
        console.log(response)
    })
    .catch((e) => {
        // el .catch se encarga de leer los errores para asi poder controlarlo y hacer lo que necesitemos con dicho error
        async.textContent = e
        console.log(e)
    })
    .finally(() => {
        console.log("finalmente")
    });


lectura()

async function lectura() {

    // para leer correctamente una promesa e ir directo a la respuesta de la misma debemos usar la palabra reservada await (esperar)  esta se encarga de esperar la respuesta de la promesa y leerla correctamente

    // el await solo se puede usar bajo 2 condiciones
    // 1) que este dentro de una funcion que tenga la palabra reservada "async", es decir que sea una funcion asincrona
    // 2) que se lea la promesa fuera de las funciones/clases/metodos
    const respuesta = await asincrono(5);
    console.log(respuesta)
}



async function lectura_trycatch(){
    // el try/catch funciona como un validador de errores
    // el try ejecuta el codigo que puede tener X cantidad de lineas, si ocurre algun error en alguna linea, se cancela la ejecucion del resto de lineas y pasa directamente al catch
    // el catch captura los errores y los recibe por parametro "catch(e)"
    // la "e" es una variable, con lo cual puede tener el nombre que ustedes quieran, por regla no escrita usamos "e", "err" o "error"
    try{
        console.log(await trycatch("") )
    }catch(e){
        console.error("esto es un error")
    }
}


lectura_trycatch();