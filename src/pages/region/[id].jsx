import Layout from "@/container/Layout/Layout";
import { getRegionAll, getRegionById } from "../services/region.service";

const RegionDetail = ({ region }) => {

    return (
        <Layout>
        <h1>{region.name}</h1>
        <h2>Génération  : {region.generation}</h2>
        <p>{region.description}</p>
        </Layout>
    )
}

//Méthode pour définir les paramètres sur une route dynamique en SSG
export  const getStaticPaths = async  () => {
    //! Définir les différentes valeurs qui seront reçus par "params"
    // //? Exemple "hard-codé"  → Pas folichon
    // const pathsDemo = [
    //     { params : { id : '1' } }, //* /region/1
    //     { params : { id : '2' } },  //* /region/2
    //     { params : { id : '3' } }   //* /region/3
    // ]

    // Récupérer les données  via  le service
    const regions  = await getRegionAll();

    // * Construire l'objet "paths" via la fonction map et les données reçues
    const pathsRegion = regions.map(region =>  {
        return {
            params : { id: region.id.toString() }
        }
    })

    //! Envoyer un objet JS qui indique lees routes possibles et les options
    return {
        paths : pathsRegion, // Les routes possibles
        fallback: false    // Est-ce qu'il doit générer les pages à la volée (→ non)
    }
}

export const getStaticProps = async ({ params }) => {
    //! Obtenir le paramètre de la route
    // → Le nom du paramètre est défini par le nom du fichiers via les [].
    const id = parseInt(params.id)

    //! Récupérer la région de l'id fourni par la route '/region/2'
    const regionData = await getRegionById(id);

    //! Envoyer un objet JS avec les données nécessaires à la page (props)
    return  {
        props : {
            region : regionData
        }
    }
}

export default RegionDetail;