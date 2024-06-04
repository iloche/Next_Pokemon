import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/region">Région</Link>
                        </li>
                    <li>
                        <Link href="/pokemon">Pokémon</Link>
                        </li>
                    <li>
                        <Link href="/about">À propos</Link>
                        </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;