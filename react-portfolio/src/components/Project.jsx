import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styles/Project.css';
import devXConnect from '../assets/images/devXConnect.png';
import raincheck from '../assets/images/raincheck.png';
import blog from '../assets/images/personal-blog.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import taskBoard from '../assets/images/task-board.png';
import noteTaker from '../assets/images/note-taker.png';

function ProjectCards() {

  const projectInfo = [
     {
      id: 'devXConnect',
      image: devXConnect,
      title: 'devXConnect()',
      deployedApp: 'https://dev-x-connect1.onrender.com/',
      repo: 'https://github.com/MarlyV1/dev-x-connect1'
    },
    {
      id: 'raincheck',
      image: raincheck,
      title: 'RainCheck',
      deployedApp: 'https://matt-carpenter-12.github.io/raincheck-project/',
      repo: 'https://github.com/MarlyV1/raincheck-project'
    },
    {
      id: 'personal-blog',
      image: blog,
      title: 'Personal Blog',
      deployedApp: 'https://marlyv1.github.io/personal-blog/',
      repo: 'https://github.com/MarlyV1/personal-blog'
    },
    {
      id: 'weather-dashboard',
      image: weatherDashboard,
      title: 'Weather Dashboard',
      deployedApp: 'https://marlyv1.github.io/weather-dashboard-server-side-APIs/',
      repo: 'https://github.com/MarlyV1/weather-dashboard-server-side-APIs'
    },
   
    {
      id: 'taask-board',
      image: taskBoard,
      title: 'Third-Party-APIs-Task-Board',
      deployedApp: 'https://marlyv1.github.io/third-party-APIs-task-board/',
      repo: 'https://github.com/MarlyV1/third-party-APIs-task-board'
    },
     {
      id: 'note-taker',
      image: noteTaker,
      title: 'Note Taker',
      deployedApp: 'https://note-taker-gock.onrender.com/',
      repo: 'https://github.com/MarlyV1/note-taker'
    }
  ]



  return (
    <>
      <section className='projectCards'>
      <Row xs={2} md={1} className="g-4">
        {/* <Col xs={1} md={2} className="g-2"> */}
          {projectInfo.map((project) => (
            <Card className='card' key={project.id} style={{ width: '32rem' }}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                
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