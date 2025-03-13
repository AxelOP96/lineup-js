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
const $confirm = d.querySelector(".confirm");
const $checkboxes = d.querySelector(".checkboxes")
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
            option.innerHTML =`${player}`;
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
    //El data index
    const $jugadoresFinales = d.querySelectorAll("select");
    
    $jugadoresFinales.forEach((jugador, index)=>{
        const checkbox = d.createElement("input");
        checkbox.setAttribute("type", 'checkbox');
        checkbox.setAttribute("name", 'defender');
        checkbox.setAttribute("data-index", index);
        $checkboxes.appendChild(checkbox);
    }) 
});
d.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const index = e.target.getAttribute("data-index");
        const select = d.querySelectorAll("select")[index];
        if (e.target.checked) {
            select.firstElementChild.setAttribute("selected", ""); 
        } else {
            select.firstElementChild.removeAttribute("selected"); 
        }
    }
});
    d.addEventListener("click", (e) => {
        if (e.target === $confirm) {
            const $jugadoresFinales = d.querySelectorAll("select");
            const allChecked = [...$checkboxes.querySelectorAll("input[type='checkbox']")].every(chk => chk.checked);
            let position = 0;
            if (allChecked) {
                $field.innerHTML = ''; // Limpiar el campo antes de agregar nuevos jugadores
                $jugadoresFinales.forEach((jugador) => {
                    const $span = d.createElement("span");
                    $span.textContent = `${jugador.value}`;
                    $span.classList.add(`p${position}`);
                    $field.appendChild($span);
                    position++;
                });
            } else {
                alert("Por favor, selecciona todos los jugadores.");
            }
        }
    });