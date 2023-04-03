function Header() {
    return (
        <nav className="green darken-3">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Food
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/akamyshan/react-shop"
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
