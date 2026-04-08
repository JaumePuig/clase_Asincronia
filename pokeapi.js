export function pokeApi() {
    const poke = document.getElementById("poke")

    // se usa la palara fetch (palabra reservada) para consultar a una api
    // despues de fetech va un parentesis y entre comillas se coloca la url de consumo
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(async (response) => {
            // se puede usar el ".then" para leer la respuesta, siendo que al ser el consumo de una api, esta siempre responde con una promesa, y si es una promesa el then debe tener una funcion asincrona y se debe usar el await parapoder leerlo
            // a la respuesta se le coloca un await al inicio y junto a la variable que representa la respuesta se coloca un .json() para poder leer el cuerpo de la respuesta (ya que este cuerpos esta en formato json)
            const pokeRespuesta = await response.json()
            
            // cada api tiene su tipo de respuesta, para esto sirve de mucho desarrollar la logica de programacion y el saber moverse en json (ya lo hemos visto en clase... ¬¬)
            poke.src = pokeRespuesta.sprites.other["official-artwork"].front_default

            console.log(pokeRespuesta.sprites.other["official-artwork"].front_default)
        })
}