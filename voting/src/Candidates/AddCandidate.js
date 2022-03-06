import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

import uuid from 'react-uuid';

function AddCandidate(props) {
    const [show, setShow] = useState(false);
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
        setAge(35);
        setParty('Democratic');
        setImageUrl('');
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Candidate
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form className="overflow-hidden" onSubmit={handleFormSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Candidate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default AddCandidate;