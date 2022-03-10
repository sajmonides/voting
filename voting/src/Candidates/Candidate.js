import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Candidate = (props) => {
    const candidate = props.candidate;

    const removeCandidate = (id) => {
        props.onRemoveCandidate(id);
    }

    return (
        <>
            <Card style={{width: '14rem'}}>
                <Card.Img variant="top" style={{height: '14rem', objectFit: 'cover'}} src={candidate.ImageUrl} />
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
                        {candidate.voteCount && <div>
                            <label><strong>Votes:&nbsp;</strong></label>
                            <span>{candidate.voteCount.toLocaleString()}</span>
                        </div>}
                    </Card.Text>
                    <Button variant="danger" onClick={() => removeCandidate(candidate.Id)}>Remove</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Candidate;