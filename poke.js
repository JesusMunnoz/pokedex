document.getElementById('pokemonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetchPokemonData(pokemonName);
});

function fetchPokemonData(pokemonName) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => displayPokemonData(data))
        .catch(error => alert('Error: No se pudo encontrar el Pokémon'));

}

function displayPokemonData(pokemon) {
    document.getElementById('pokeName').innerText = pokemon.name;
    document.getElementById('pokeImage').src = pokemon.sprites.front_default;

    let abilitiesTable = document.getElementById('abilitiesTable').getElementsByTagName('tbody')[0];
    abilitiesTable.innerHTML = '';

    let typeTable = document.getElementById('typeTable').getElementsByTagName('tbody')[0];
    typeTable.innerHTML = '';

    /*for (let i = 0; i < pokemon.types.length; i++){
        let row = typeTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = pokemon.types[i].type.name;
    }

    for (let i = 0; i < pokemon.abilities.length; i++){
        let row = abilitiesTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = pokemon.abilities[i].ability.name;
    }*/

    pokemon.types.forEach(type => {
        let row = typeTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = type.type.name;
    });

    pokemon.abilities.forEach(ability => {
        let row = abilitiesTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = ability.ability.name;
    });

    document.getElementById('pokemonInfo').classList.remove('hidden');
}