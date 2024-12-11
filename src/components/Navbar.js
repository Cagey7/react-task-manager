import { Link } from "react-router-dom"
import { useAuth } from "../hooks/AuthProvider";
import "../styles/NavBar.css";


function Navbar() {
    const user = useAuth();
    console.log(user);
    return (
        <header>
            <div class="container container-nav">
                <div class="site-title">
                    <h1><Link to="/">Таск Менеджер</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/login">Логин</Link></li>
                        <li><Link to="/register">Регистрация</Link></li>
                        <li><Link to="/profile">{user}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar