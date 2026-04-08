let pokeArray = [
  "Mew",
  "Mewtwo",
  "Wooper",
  "Quagsire",
  "Latias",
  "Latios",
  "Victini",
  "Zoroark",
];
let imgPoke = document.getElementById("imgPoke");
let namePoke = document.getElementById("namePoke");

function contador() {
  let currentPos = 0;

  setInterval(() => {
    return fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokeArray[currentPos],
    ).then(async (response) => {
      // se puede usar el ".then" para leer la respuesta, siendo que al ser el consumo de una api, esta siempre responde con una promesa, y si es una promesa el then debe tener una funcion asincrona y se debe usar el await parapoder leerlo
      // a la respuesta se le coloca un await al inicio y junto a la variable que representa la respuesta se coloca un .json() para poder leer el cuerpo de la respuesta (ya que este cuerpos esta en formato json)
      const pokeRespuesta = await response.json();

      // cada api tiene su tipo de respuesta, para esto sirve de mucho desarrollar la logica de programacion y el saber moverse en json (ya lo hemos visto en clase... ¬¬)
      imgPoke.src =
        pokeRespuesta.sprites.other["official-artwork"].front_default;
        imgPoke.style.height = 150;
      namePoke.textContent = pokeRespuesta.name.toUpperCase();
      if (currentPos == pokeArray.length - 1) {
        currentPos = 0;
      } else {
        currentPos++;
      }
    });
  }, 1000);
}

contador();
