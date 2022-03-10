

const Run = async (candidates, voterCount) => {
    let voters = [];
    const candidateCount = candidates.length;
    for (var i = 1; i <= voterCount; i++) {
        let candidateIds = [];
        let thisVoter = [];
        candidates.map((cand) => candidateIds.push(cand.Id));

        for (var k = 1; k <= candidateCount; k++) {
            const min = 0;
            const max = Math.floor(candidateIds.length - 1);
            const rand = Math.floor(Math.random() * (max - min + 1)) + min;
            //const rand = getRandomNumber(0, candidateIds.length - 1);
            const thisVote = candidateIds[rand];
            thisVoter.push(thisVote);
            candidateIds = candidateIds.filter(c => c != thisVote);
        }
        voters.push(thisVoter);
    }

    voters.map((voter) => {
        candidates.find(c => c.Id == voter[0]).voteCount++;
    });

    candidates = candidates.sort((a, b) => b.voteCount - a.voteCount);
    return {candidates, voters};
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Run;