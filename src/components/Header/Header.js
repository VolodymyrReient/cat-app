function Header() {
    return (
        <nav className="blue darken-4">
            <div className="nav-wrapper">
                <a
                    href="https://github.com/VolodymyrReient/cat-app"
                    className="brand-logo"
                >
                    React Cats
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/VolodymyrReient/cat-app">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
