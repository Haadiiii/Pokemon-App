import "./index.css";
import Pokemon from "./modules.js/pokemonList";
const menu = document.getElementById("menu");

const pokemon = new Pokemon();


menu.innerHTML = `
<nav id="nav">
<h1>PokeDoki</h1>
<ul class="list">
    <li><a href=""></a>About</li>
    <li>List</li>
    <li>Value</li>
</ul>
</nav>
`;
pokemon.displayPokemon();
