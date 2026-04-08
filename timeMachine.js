let txtTime = document.getElementById("txtTime");

function saludo(){
// el settimeout funciona igual que el setinterval con la diferencia de que este se ejecutara solo 1 vez
    setTimeout(() => {
        console.log("¡He vuelto del futuro!")
    }, 2000);
}

saludo();