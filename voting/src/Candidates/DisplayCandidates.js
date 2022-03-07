import Candidate from './Candidate.js';

function DisplayCandidates(props) {
    return (
        <div className="candidatesContainer">
            {props.candidates.map((candidate, index) => {
                    return (
                        <Candidate key={index} candidate={candidate} onRemoveCandidate={props.onRemoveCandidate} />
                    );
                })}
        </div>
    );
}

export default DisplayCandidates;