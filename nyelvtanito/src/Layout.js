import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Gepel">Válaszd ki!</Link>
                    </li>
                    <li>
                        <Link to="/Gepel">Egészítsd ki!</Link>
                    </li>
                    <li>
                        <Link to="/Rendez">Rakd sorba!</Link>
                    </li>
                    
                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
