const pokemonInfo = require('./pokemon.json');
const mapper = function(pokemon) {
  console.log(
    `<div class="pokemon" id='${pokemon.name}'>
       <div class="flip-card-front pokemonContainer">
         <p style='font-weight:bold'>${pokemon.name}</p> 
           <img class="pokemonImage" src="${pokemon.art_url}" alt="NotFound"/> 
         <p>National id: ${pokemon.national_id}</p>
       </div>
       <div class="flip-card-back">
         <p style='text-align:center;font-weight:bold'>Id : ${pokemon['_id']}</p></ br>
           <p style='padding:3px'>${pokemon.description}</p>
       </div>
     </div>`
  );
};
{
}
pokemonInfo.map(mapper);
