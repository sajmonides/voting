import { RetrieveCandidates } from './Candidates/StoredCandidates.js';
import Candidate from './Candidates/Candidate.js';
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
    }, [electionCandidates]);

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

    const numToString = (num) => {
        let s = "";
        switch (num) {
            case 1:
                s = "st";
                break;
            case 2:
                s = "nd";
                break;
            case 3:
                s = "rd";
                break;
            default:
                s = "th";
                break;
        }
        return num + s;
    };

    return (
        <>
            <Container className="mt-3">
                <div>
                    <Button type="primary" onClick={handleSimulateVoteClick}>Simulate Voting</Button>
                </div>

                {loading && <div>Loading...</div>}
                {!loading && electionCandidates.map((candidate, index) => {
                    return (<>
                        {/* <div key={index}>
                        <div>{index} place</div>
                        <div>{candidate.Name}</div>
                        <div>Vote count: {candidate.voteCount}</div></div> */}
                        <div className="mycard">
                            <div>
                                <span style={{color: 'white'}}>{numToString(index+1) + " place"}</span>
                            </div>
                            <Candidate key={index} candidate={candidate} />
                        </div>

                    </>);
                })}
            </Container>
        </>

    );
}

export default Election;