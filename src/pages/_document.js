import { Html, Head, Main, NextScript } from "next/document";
// Composant "Document"
// - Définir le squelette de base de la page
// - Ne pas intéragir avec le routing de Next JS

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
