import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/styles/Contact.css';
import Header from './Header';

function Contact() {
    return (
        <>
        <Header />
        <section>
            <h2 className='sectionHeading'>Contact</h2>
            <Form className='contactForm'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} required/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </section>
        </>
    );
}

export default Contact;