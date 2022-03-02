import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Candidate(props) {
    const candidate = props.candidate;

    function removeCandidate(id) {
        props.onRemoveCandidate(id);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '10rem', objectFit: 'cover' }} src={candidate.ImageUrl} />
                <Card.Body>
                    <Card.Title>{candidate.Name}</Card.Title>
                    <Card.Text>
                        <div>
                            <label><strong>Age:&nbsp;</strong></label>
                            <span>{candidate.Age}</span>
                        </div>
                        <div>
                            <label><strong>Party:&nbsp;</strong></label>
                            <span>{candidate.Party}</span>
                        </div>
                    </Card.Text>
                    <Button variant="danger" onClick={() => removeCandidate(candidate.Id)}>Remove</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Candidate;