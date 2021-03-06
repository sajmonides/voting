import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Candidate from './Candidate.js';

function DisplayCandidates(props) {
    return (

                <div className="candidateContainer">
                    {props.candidates.map((candidate, index) => {
                        return (
                            <Candidate key={index} candidate={candidate} onRemoveCandidate={props.onRemoveCandidate} />
                        );
                    })}
                </div>

    );
};

export default DisplayCandidates;