import { Link } from "react-router-dom"


function Navbar() {
    return (
        <header>
            <div class="container-nav">
                <div class="site-title">
                    <h1>Таск Менеджер</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Логин</Link></li>
                        <li><Link to="/register">Регистрация</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar