document.addEventListener("DOMContentLoaded", ()=>{
    const players = {
        goalkeeper: ["Leandro Brey", "Agustin Marchesin", "Javier García", "Sergio Romero"],
        defenders: ["Ayrton Costa", "Cristian Lema", "Marcelo Saracchi", "Nicolás Figal", "Marcos Rojo", "Luis Advíncula", "Frank Fabra", "Lautaro Blanco", "Juan Barinaga", "Lautaro Di Lollo", "Lucas Blondel", "Mateo Mendia", "Rodrigo Battaglia"],
        midfielders: ["Ander Herrera", "Esteban Rolon", "Agustín Martegani", "Juan Ramirez", "Ignacio Miramon", "Kevin Zenon", "Tomás Belmonte", "Milton Delgado", "Mauricio Benitez", "Jabes Saralegui", "Leandro Paredes"],
        attackers: ["Carlos Palacios", "Exequiel Zeballos", "Milton Giménez", "Édinson Cavani", "Lucas Janson", "Miguel Merentiel", "Brian Aguirre"]
    };



        const createOptions = (options, selectElement) => {
                options.forEach(player => {
                    const option = document.createElement("option");
                    option.value = player;
                    option.textContent = player;
                    selectElement.appendChild(option);
                });
            };

            createOptions(players.goalkeeper, document.getElementById("goalkeeper"));
            createOptions(players.defenders, document.getElementsByClassName("defenders"));
            createOptions(players.midfielders, document.getElementByByClassName("midfielders"));
            createOptions(players.attackers, document.getElementByByClassName("attackers"));
        });
/*const players = {
    goalkeeper: ["Player 1", "Player 2"],
    defenders: ["Player 3", "Player 4", "Player 5", "Player 6"]
};*/