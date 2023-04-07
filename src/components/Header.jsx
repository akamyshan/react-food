import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="green darken-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Food
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/akamyshan/react-food"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/akamyshan">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
