import axios from "axios";
// Rappel pour installer axios -> npm i axios

export const getPokemonById  = async (id) =>  {

    // L'url à consommer
    const url =  `https://pokeapi.co/api/v2/pokemon-species/${id}`

    // Réaliser la requête et renvoyer la promesse
    return axios.get(url)
    .then(({ data }) =>  {
        // Mapping vers un objet pour notre projet
        return  {
            id:  data.id,
            name: {
                en: data.names.find(n  => n.language.name === 'en').name,
                fr: data.names.find(n  => n.language.name === 'fr').name
            },
            genus: data.genera.find(n  => n.language.name === 'fr').genus,
            isLegendary: data.is_legendary,
            isBaby: data.is_baby
        }
    })
    .catch(() => {
        return null
    })
}