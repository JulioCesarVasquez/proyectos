let pied="piedra";
let tij="tijera";
let papel="papel";
function juegoPPT(per,cpu){
    if(per==cpu){
        console.log("Empate");
    }else {
        if(per=="piedra"&&cpu=="tijera" || per=="tijera"&&cpu=="papel" || per=="papel"&&cpu=="piedra"){
            console.log("gana persona")
                
        }else{
            console.log("gana cpu")
        }

    }    
}
console.log(pied+"--"+tij)
juegoPPT(pied,tij);
console.log(tij+"--"+tij)
juegoPPT(tij,tij)
console.log(pied+"--"+papel)
juegoPPT(pied,papel)
