//! Le composant "App"
// - Permet d'ajouter un CSS Global 
// - Encapsule les autres pages
// - Permet d'injecter les données aux pages (via les props)

// L'import commençant par "@/..." permet de définir le chemin en partant du dossier "src" de notre projet

import "@/styles/globals.css";
import Head from "next/head";

//? Gestion de "Font" optimisé par Next
// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
import { Roboto } from "next/font/google"
const roboto = Roboto ({ subsets : ["latin"], weight: '300'})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Demo NextJS</title>
        <meta name="description" content="Formation Front-End 2024" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
    </>
  )
}
