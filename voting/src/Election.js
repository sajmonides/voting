import { RetrieveCandidates } from './Candidates/StoredCandidates.js';
import Run from './Voting/VotingProcedure.js';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

function Election() {
    const [electionCandidates, setElectionCandidates] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const voterCount = 3000000;
        Run(electionCandidates, voterCount).then((data) => {
            let z = data.candidates;
            let zz = data.voters;
            // setElectionCandidates(data.candidates);
            setLoading(false);
            setElectionCandidates(data.candidates);
        });
    },[electionCandidates]);

    const handleSimulateVoteClick = () => {
        const storedCandidates = RetrieveCandidates();
        if (!storedCandidates) return;
        let candidates = [];
        storedCandidates.map((cand) => {
            candidates.push({ ...cand, voteCount: 0 });
        });
        setElectionCandidates(candidates);

        setLoading(true);
    };

    return (
        <>
            <Container className="mt-3">
                <Button type="primary" onClick={handleSimulateVoteClick}>Simulate Voting</Button>
                {loading && <div>Loading...</div>}
                {!loading && electionCandidates.map((candidate, index) => {
                    return (<><div key={index}>
                        <div>{index} place</div>
                        <div>{candidate.Name}</div>
                        <div>Vote count: {candidate.voteCount}</div></div>
                    </>);
                })}
            </Container>
        </>

    );
}

export default Election;