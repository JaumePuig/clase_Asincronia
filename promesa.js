export function promesa(pepito) {
// las promesas responden en resuelto o rechazado, la palabra reject y resolve no son reservadas pero por norma general se usan estas palabras en especifico cuandos se trabaja en equipo
    return new Promise(
        (resolve, reject) => {
            if (pepito = true) {
                resolve("todo bien")
            } else {
                reject("todo mal")
            }



        })

}