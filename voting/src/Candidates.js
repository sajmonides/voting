import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Candidates() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Form className="border rounded p-3 overflow-hidden">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add Candidate</Form.Label>
                            <Form.Control type="email" placeholder="Enter candidate's name" />
                        </Form.Group>
                        <Button className="text-end" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Candidates;