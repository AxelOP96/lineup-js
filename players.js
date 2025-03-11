const players = {
    goalkeeper: ["Leandro Brey", "Agustin Marchesin", "Javier García", "Sergio Romero"],
    defenders: ["Ayrton Costa", "Cristian Lema", "Marcelo Saracchi", "Nicolás Figal", "Marcos Rojo", "Luis Advíncula", "Frank Fabra", "Lautaro Blanco", "Juan Barinaga", "Lautaro Di Lollo", "Lucas Blondel", "Mateo Mendia", "Rodrigo Battaglia"],
    midfielders: ["Ander Herrera", "Esteban Rolon", "Agustín Martegani", "Juan Ramirez", "Ignacio Miramon", "Kevin Zenon", "Tomás Belmonte", "Milton Delgado", "Mauricio Benitez", "Jabes Saralegui", "Leandro Paredes"],
    attackers: ["Carlos Palacios", "Exequiel Zeballos", "Milton Giménez", "Édinson Cavani", "Lucas Janson", "Miguel Merentiel", "Brian Aguirre"]
};
const d = document;
const $field = d.querySelector(".game");
const $arquero = d.getElementById("goalkeeper"),
$defenders = d.querySelectorAll(".defender"),
$midfielders = d.querySelectorAll(".midfielder"),
$attackers = d.querySelectorAll(".attacker");
d.addEventListener("DOMContentLoaded", (e)=>{
    
    
    players.goalkeeper.forEach( (player) =>{
        const option = d.createElement("option");
        option.innerHTML = `${player}`;
        $arquero.appendChild(option);
    });
    $arquero.firstElementChild.setAttribute("selected", "")
    players.defenders.forEach( (player) =>{
    
        $defenders.forEach((defender) =>{
            const option = d.createElement("option");
            //console.log(defender.previousElementSibling)
            option.innerHTML = `${player}`;
            //console.log(players.defenders.indexOf(`${player}`))
            /* if((option.innerHTML === defender.previousElementSibling.innerHTML)){
            
            } */
            
            console.log(option.innerHTML)
            console.log(defender)    
            defender.appendChild(option);
            defender.firstElementChild.setAttribute("selected", "")
        })
        
    });
    
    players.midfielders.forEach( (player) =>{
    
        $midfielders.forEach((midfielder) =>{
            const option = d.createElement("option");
            option.innerHTML = `${player}`;
            midfielder.appendChild(option);
            midfielder.firstElementChild.setAttribute("selected", "")
        })
        
    });
    players.attackers.forEach( (player) =>{
    
        $attackers.forEach((attacker) =>{
            const option = d.createElement("option");
            option.innerHTML = `${player}`;
            attacker.appendChild(option);
            attacker.firstElementChild.setAttribute("selected", "")
        })
         
    });
    /* const $jugadoresFinales = d.querySelectorAll("option[selected]");
    $jugadoresFinales.forEach((jugador)=>{
        const actual = jugador.value;
        console.log(jugador)
    }) */
});
d.addEventListener("change", (e)=>{
    const $jugadoresFinales = d.querySelectorAll("option[selected]");
    //console.log($jugadoresFinales)
    $jugadoresFinales.forEach((jugador) =>{
        const $span = d.createElement("span");
        $span.textContent = `${jugador.value}`;
        $field.appendChild($span);
    })
})