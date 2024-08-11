import ProjectCards from "./Project";
import Header from "./Header";

function Portfolio() {
    return (
        <>
            <Header />
            <section>
                <h2 className="sectionHeading">Portfolio</h2>
                <ProjectCards />
            </section>
        </>
    )
}

export default Portfolio;