import '../assets/styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <>
            <Navigation />
            <header>
                <h1 className='text-box'>Marly's Portfolio</h1>
            </header>

        </>
    );
}

export default Header;