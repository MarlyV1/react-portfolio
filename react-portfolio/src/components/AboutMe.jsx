import '../assets/styles/AboutMe.css';
import avatar from '../assets/images/avatar.jpg'

function About() {
    return(
        <section>
            <h2 className='sectionHeading'>About Me</h2>
            <div className='aboutMeSection'>
            <img className='avatar' src={avatar} alt="" />
            <p className='aboutMeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed tenetur vel neque perspiciatis esse, quia animi, velit eligendi ex facere laboriosam quos vitae nisi architecto rem, quaerat qui exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam omnis qui, maiores quam in perspiciatis tempora esse placeat praesentium dolore ab sed aliquam velit fugit nulla mollitia magnam iusto nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium nisi natus aliquid quia ab, incidunt harum a ipsa dolore illum blanditiis saepe maiores culpa! Qui ad quas inventore repellat?</p>
            </div>
        </section>
    )
}

export default About;