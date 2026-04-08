let inpTxt = document.getElementById("inpTxt");
let btnMayus = document.getElementById("btnMayus");

btnMayus.addEventListener("click", async () => {
    try{
            console.log(await toMayus(inpTxt.value))
        }catch(e){
            console.error("¡Eso no es una palabra, es un número!")
        }
});

function toMayus(palabra) {
    return new Promise((resolve, reject) => {
            if (palabra.isInteger()) {
                reject("¡Eso no es una palabra, es un número!");
            } else {
                resolve(palabra.toUpperCase())
            }
        })
}