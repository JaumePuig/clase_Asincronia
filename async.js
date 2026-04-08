export function asincrono(numero) {
    return new Promise(
        (resolve, reject) => {
            resolve(numero * numero)
        })
}