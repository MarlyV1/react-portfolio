import '../assets/styles/AboutMe.css';
import avatar from '../assets/images/avatar.jpg'

function About() {
    return(
        <section>
            <h2 className='sectionHeading'>About Me</h2>
            <div className='aboutMeSection'>
            <img className='avatar' src={avatar} alt="" />
            <p className='aboutMeText'>My name is Anne Marly Valcin, but I prefer to be called Marly.  Fun fact, Marly is the second half of my first name and not a middle name. I was born in Haiti, but came to the US when I was five years old. I'm now currently based in Orlando, FL and previously graduated from UCF with a degree in Biomedical Science. After graduation I wanted to try coding since that has been an interest of mine for the longest time. And one day I thought to my self "why not learn to code now." So, I took the opportunity and got myself enrolled into a coding bootcamp, and the best part was that it was being offered by UCF. And now my developer journey is just beginning.
            </p>
            </div>
        </section>
    )
}

export default About;