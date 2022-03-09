
const Run = async (candidates, voterCount) => {
    return new Promise((resolve, reject) => {
        let voters = [];
        const candidateCount = candidates.length;
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
            candidates.find(c => c.Id == voter[0]).voteCount++;
        });
    
        candidates = candidates.sort((a, b) => b.voteCount - a.voteCount);
        resolve({ candidates, voters }) ;
    });
   

    //await sleep(2000);

    return ({});
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Run;