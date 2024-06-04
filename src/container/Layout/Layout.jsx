
const { default: Header } = require("../Header/header")

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;