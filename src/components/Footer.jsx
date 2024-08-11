import githubIcon from '../assets/images/github-icon.svg'
import linkedInIcon from '../assets/images/linkedin-icon.svg'
import stackoverflowIcon from '../assets/images/stackoverflow-icon.svg'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/MarlyV1" target="blank"> <img src={githubIcon} alt="GitHubg logo" /></a>
            <a href="https://www.linkedin.com/" target="blank"> <img src={linkedInIcon} alt="LinkedIn logo" /></a>
            <a href="https://stackoverflow.com/" target="blank"> <img src={stackoverflowIcon} alt="Stackvverflow logo" /></a>
        </footer>

    )

}

export default Footer;