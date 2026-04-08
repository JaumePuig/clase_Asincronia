export function contador() {
    let contador = document.getElementById("contador")
    console.log((contador))
    // el settimeout ejecuta su funcion interna cada que se cumple el tiempo indicado como segundo parametor
    // el set interval necesita de 2 parametros para su correcto funcionamiento, 1 es una funcion de flecha y el otro el tiempo de intervalo en milisegundos
    setInterval(
        () => {
            console.log("hola")
            contador.textContent = parseInt(contador.textContent) + 1;
        }, 1000
    )
}

export function alerta(){
// el settimeout funciona igual que el setinterval con la diferencia de que este se ejecutara solo 1 vez
    setTimeout(() => {
        alert("esto es una alerta")
    }, 5000);
}