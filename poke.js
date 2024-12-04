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
    document.getElementById('pokeName').innerText = pokemon.name.toUpperCase();
    document.getElementById('pokeImage').src = pokemon.sprites.front_default;

    let abilitiesTable = document.getElementById('abilitiesTable').getElementsByTagName('tbody')[0];
    abilitiesTable.innerHTML = '';

    let typeTable = document.getElementById('typeTable').getElementsByTagName('tbody')[0];
    typeTable.innerHTML = '';

    pokemon.types.forEach(type => {
        let row = typeTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = type.type.name.toUpperCase();
    });

    pokemon.abilities.forEach(ability => {
        let row = abilitiesTable.insertRow();
        let cell = row.insertCell(0);
        cell.innerText = ability.ability.name.toUpperCase();
    });

    document.getElementById('pokemonInfo').classList.remove('hidden');
}