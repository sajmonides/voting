import AddCandidate from "./AddCandidate.js";
import DisplayCandidates from './DisplayCandidates.js';

import Container from 'react-bootstrap/Container';

import { useState, useEffect } from 'react';

function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const localCandidates = localStorage.getItem('candidates');
        if (localCandidates) {
            const parsedCandidates = JSON.parse(localCandidates);
            setCandidates(parsedCandidates);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('candidates', JSON.stringify(candidates));
    }, [candidates]);

    function handleCandidateAdd(candidate) {
        setCandidates([...candidates, candidate]);
    }

    function handleCandidateRemove(id) {
        let newCandidates = candidates.filter(can => {
            if (can.Id != id) return can;
        });
        setCandidates(newCandidates);
    }

    return (
        <>
            <Container id="candidatesContainer" className="mt-3">
                <AddCandidate onCandidateAdd={handleCandidateAdd} />
                <div className="mt-3">
                    <DisplayCandidates candidates={candidates} onRemoveCandidate={handleCandidateRemove} />
                </div>
            </Container>
        </>
    );
}


export default Candidates;