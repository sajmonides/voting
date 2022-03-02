import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import Candidate from './Candidate.js';

function DisplayCandidates(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack direction="horizontal" gap={2}>
                    {props.candidates.map((candidate, index) => {
                        return (
                            <Candidate key={index} candidate={candidate} onRemoveCandidate={props.onRemoveCandidate} />
                        );
                    })}
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default DisplayCandidates;