

const Run = async (candidates, voterCount) => {

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let voters = [];
    const candidateCount = candidates.length;
    for (var z = 0; z < candidates.length; z++) {
        candidates[z].Id = z;
    }

    candidates.map((cand) => {
        const otherCandidates = candidates.filter(c => c.Id != cand.Id);
        for (var choiceIndex = 2; choiceIndex < candidates.length; choiceIndex++) {
            let otherVotes = {};
            const choice = 'choice' + choiceIndex;
            otherCandidates.map(o => {
                otherVotes['candidate' + o.Id] = 0;
            });
            cand[choice] = otherVotes;
        }
    });

    for (var i = 1; i <= voterCount; i++) {
        let candidateIds = [];
        let thisVoter = [];
        candidates.map((cand) => candidateIds.push(cand.Id));

        for (var k = 1; k <= candidateCount; k++) {
            const rand = getRandomNumber(0, candidateIds.length - 1);
            const thisVote = candidateIds[rand];
            thisVoter.push(thisVote);
            candidateIds = candidateIds.filter(c => c != thisVote);
        }
        voters.push(thisVoter);
    }

    voters.map((voter) => {
        if (voter.length == 0) return;
        const firstCandidate = candidates.find(c => c.Id == voter[0]);
        firstCandidate.voteCount++;

        for (var v = 1; v < voter.length - 1; v++) {
            const thisVote = voter[v];
            let choice = 'choice' + (v + 1);
            let candName = 'candidate' + thisVote;
            firstCandidate[choice][candName]++;
        }
    });

    candidates = candidates.sort((a, b) => b.voteCount - a.voteCount);
    return {candidates};
};

export default Run;