import '../assets/styles/Navigation.css';
import { NavLink, Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav className="navStyle navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="about" className="nav-link" aria-current="page" >About Me</Link>
                            <Link to='portfolio' className="nav-link" href="#about">Portfolio</Link>
                            <Link to='contact' className="nav-link" href="#">Contact</Link>
                            <Link to='' className="nav-link" href="#">Resume</Link>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navigation;