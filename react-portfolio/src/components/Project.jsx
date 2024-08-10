import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styles/Project.css';
import background from '../assets/images/background.jpg';
import blog from '../assets/images/personal-blog.png';

function ProjectCards() {

  const projectInfo = [
    {
      id: 'title1',
      image: 'url',
      title: 'title1',
      deployedApp: 'link',
      repo: 'repo link'
    },
    {
      id: 'title2',
      image: 'url',
      title: 'title2',
      deployedApp: 'link',
      repo: 'repo link'
    },
    {
      id: 'title3',
      image: 'url',
      title: 'title3',
      deployedApp: 'link',
      repo: 'repo link'
    },
    {
      id: 'title4',
      image: 'url',
      title: 'title4',
      deployedApp: 'link',
      repo: 'repo link'
    },
    {
      id: 'title5',
      image: 'url',
      title: 'title5',
      deployedApp: 'link',
      repo: 'repo link'
    },
    {
      id: 'title6',
      image: 'url',
      title: 'title6',
      deployedApp: 'link',
      repo: 'repo link'
    },
  ]



  return (
    <>
      <section className='projectCards'>
      <Row xs={2} md={1} className="g-4">
        {/* <Col xs={1} md={2} className="g-2"> */}
          {projectInfo.map((project) => (
            <Card className='card' key={project.id} style={{ width: '32rem' }}>
              <Card.Img variant="top" src={blog} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        {/* </Col> */}
         </Row>

        </section >
      </>
  );
}

export default ProjectCards;