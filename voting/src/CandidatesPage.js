import AddCandidate from "./AddCandidate.js";
import DisplayCandidates from './DisplayCandidates.js';

import {useState, useEffect} from 'react';

function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const localCandidates = localStorage.getItem('candidates');
        if (localCandidates) {
            const parsedCandidates = JSON.parse(localCandidates);
            setCandidates(parsedCandidates);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('candidates', JSON.stringify(candidates));
    },[candidates]);

    function handleCandidateAdd(candidate) {
        setCandidates([...candidates, candidate]);
    }

    function handleRemoveClick() {
        setCandidates([]);
    }

    function handleCandidateRemove(id) {
        let newCandidates = candidates.filter(can => {
            if (can.Id != id) return can;
        });
        setCandidates(newCandidates);
    }

    return (
        <>
            <div className="candidatesContainer">
                {/* <input type="button" onClick={handleRemoveClick} value="remove"></input> */}
                <AddCandidate onCandidateAdd={handleCandidateAdd} />
                <DisplayCandidates candidates={candidates} onRemoveCandidate={handleCandidateRemove} />
            </div>
        </>
    );
}


export default Candidates;