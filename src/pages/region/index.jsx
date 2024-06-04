import Layout from "@/container/Layout/Layout";
import { getRegionAll } from "../services/region.service";
import RegionList from "@/components/RegionList/RegionList";

// ↓ Composant pré-rendu (avec, si nécessaire, du code client)
const Region = ({ regions }) => {

    return (
        <Layout>
        <h1>Les régions</h1>
        <RegionList regions={regions} />
        </Layout>
    )
}

// ↓ Méthode serveur qui permet d'injecter des données dans le composant
// Il est possible d'utiliser "getStaticProps" ou "getServerSideProps".
export const getStaticProps = async () => {
    // Pour cett page, on est en "SSG"

    //! Récupération des données nécessaires pour la page (via les services)
    const regionsFromService = await getRegionAll();

    //! La  fonction "getStaticProps" doit renvoyer un objet JS
    return {
        // Injecter les données au composant via ses props
        props : {
            regions : regionsFromService
        }
    }
}

export default Region;