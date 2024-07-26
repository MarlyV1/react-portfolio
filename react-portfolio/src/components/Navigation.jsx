function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">About Me</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">About Me</a>
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