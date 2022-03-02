import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import uuid from 'react-uuid';

function AddCandidate(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(35);
    const [party, setParty] = useState('Democratic');
    const [imageUrl, setImageUrl] = useState('');

    const minAge = 10;
    const maxAge = 120;

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    function handlePartyChange(e) {
        setParty(e.target.value);
    }

    function handleImageUrlChange(e) {
        setImageUrl(e.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const candidate = {
            Id: uuid(),
            Name: name,
            Age: age,
            Party: party,
            ImageUrl: imageUrl
        }
        props.onCandidateAdd(candidate);
        setName('');
    }

    return (
        <>
            <Container>
                <Row className="col-12 col-sm-8 col-md-6">
                    <Col>
                        <Form className="border rounded p-3 overflow-hidden" onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={name} onChange={handleNameChange} type="text" placeholder="Enter candidate's name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control value={age} onChange={handleAgeChange} min={minAge} max={maxAge} type="number" placeholder="Enter candidate's age" />
                                <Form.Text className="text-muted">
                                    Age must be between {minAge} and {maxAge}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Party</Form.Label>
                                <Form.Select value={party} onChange={handlePartyChange}>
                                    <option value="Democratic">Democratic</option>
                                    <option value="Republican">Republican</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control value={imageUrl} onChange={handleImageUrlChange} type="text" placeholder="Enter image URL" />
                            </Form.Group>
                            <Button className="float-end" variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddCandidate;