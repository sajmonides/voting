const candidatesKey = 'candidates';

const RetrieveCandidates = () => {
    const localCandidates = localStorage.getItem(candidatesKey);
    if (localCandidates) return JSON.parse(localCandidates);
    return null;
};

const SaveCandidates = (candidates) => {
    localStorage.setItem(candidatesKey, JSON.stringify(candidates));
};

export { RetrieveCandidates, SaveCandidates };