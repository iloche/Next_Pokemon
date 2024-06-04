import pokemonData from '@/data/pokemon.json';

// Ce service va contenir toutes les méthodes d'interaction avec les données "Région".
// Celui-ci permet d'isoler la logique pour accéder aux données (DB, API, JSON, ...)

export const getRegionCount = async () => {

    return pokemonData.regions.length;
}

export const getRegionAll = async () => {
    
    return pokemonData.regions;
}

export const getRegionById = async (id) => {

    //! La méthode "find" permet d'obtenir un  élément d'une collection via un prédicat. Le prédicat est une fonction qui renvoi une valeur booléenne. 
    //! Si l'élément  n'est pas trouvé, la fonction renvoie "undefined"

    //? Explication du prédicat :
    // Pour chaque région, compare  l'id de la région avec l'id reçu en paramètre
    return pokemonData.regions.find(region => region.id === id)  ?? null ; //* find() c'est le lvl up de la boucle for()
}