import AddCandidate from "./AddCandidate.js";
import DisplayCandidates from './DisplayCandidates.js';
import {RetrieveCandidates, SaveCandidates} from './StoredCandidates.js';
import DefaultCandidates from "./DefaultCandidates.js";

import Container from 'react-bootstrap/Container';

import { useState, useEffect } from 'react';

function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const localCandidates = RetrieveCandidates();
        if (localCandidates) setCandidates(localCandidates);
    }, []);

    useEffect(() => {
        SaveCandidates(candidates);
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

    const handleLoadDefaultClick = () => {
        setCandidates(DefaultCandidates);
    }

    return (
        <>
            <Container className="mt-3">
                <div>
                    <AddCandidate onCandidateAdd={handleCandidateAdd} />
                    <span className="mx-2" onClick={handleLoadDefaultClick}><u>Or load default candidates</u></span>
                </div>
                
                <div id="candidatesContainer" className="mt-3">
                    <DisplayCandidates candidates={candidates} onRemoveCandidate={handleCandidateRemove} />
                </div>
            </Container>
        </>
    );
}


export default Candidates;