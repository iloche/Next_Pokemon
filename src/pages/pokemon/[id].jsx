import Layout from "@/container/Layout/Layout";
import { getPokemonById } from "../services/pokemon.service";
import { notFound } from "next/navigation";

const PokemonDetail = ({ pokemon }) => {

    return (
        <Layout>
            <h1>{pokemon.name.fr} / {pokemon.name.en}</h1>
            <h2>{pokemon.genus}</h2>
        </Layout>
    )
}

// Définition  des routes possibles pour  le rendu static
export const getStaticPaths = async () => {

    //! Définir les différentes valeurs de route possible
    //? On défini uniquement la route pour Pikachu (id: 25)
    const pathsPoke  = [
        {  params : { id: '25'}}
    ]

    //! Envoyer un objet JS qui indique les routes possibles et les options
    return {
        paths:  pathsPoke,
        fallback: 'blocking' // Est-ce qu'il doit générer les pages à la volé
    }
}

// Pré-rendu static
export const getStaticProps = async ({ params }) =>   {

    //! Récupération du paramètre "id" de la route
    const id  = parseInt(params.id)

    //! Récupération des données via le service
    
    const pokemonData = await getPokemonById(id)

    //! Si aucune donnée n'est récupérée => Page 404
    if(!pokemonData) {
        //? Envoi un objet JS qui indique une erreur "Not Found"
        return  {
            notFound: true
        }
    }

    //! Envoi un objet JS avec les données nécessaires à la page
    return  {
        props : {
            pokemon : pokemonData
        }
    }
}

export default PokemonDetail;