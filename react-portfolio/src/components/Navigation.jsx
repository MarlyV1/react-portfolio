import '../assets/styles/Navigation.css';

function Navigation() {
    return (
        <nav className="navStyle navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">About Me</a>
                        <a className="nav-link" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Contact</a>
                        <a className="nav-link" href="#">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;