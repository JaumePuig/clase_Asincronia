export function trycatch(numero) {
    return new Promise(
        (resolve, reject) => {
            if (numero != "") {
                resolve(numero * numero);
            } else {
                reject("no es un numero")
            }
        }
    )
}