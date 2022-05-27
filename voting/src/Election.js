import { RetrieveCandidates } from './Candidates/StoredCandidates.js';
import Candidate from './Candidates/Candidate.js';
import {Run, InstantRunOff} from './Voting/VotingProcedure.js';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

import { useWorker, WORKER_STATUS } from "@koale/useworker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Simulated Election Results',
        },
    },
};

const voterCount = 3000000;

function Election() {
    const [initialCandidates, setInitialCandidates] = useState([]);
    const [resultCandidates, setResultCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [electionWorker] = useWorker(Run);

    useEffect(async () => {
        if (initialCandidates == null || initialCandidates.length == 0) return;
        // Run(initialCandidates, voterCount).then((data) => {
        //     let z = data.candidates;
        //     console.log(z);
        //     setResultCandidates(data.candidates);
        //     setLoading(false);
        // });

        if (initialCandidates.length == 0) return;
        const result = await electionWorker(initialCandidates, voterCount);
        console.log(result);
        setResultCandidates(result.candidates);
        setLoading(false);

    }, [initialCandidates]);

    useEffect(() => {
        if (resultCandidates == null || resultCandidates.length == 0) return;
        const labels = resultCandidates.map(c => c.Name);

        const dataset = {
            label: 'Election Results',
            data: resultCandidates.map(r => r.voteCount),
            backgroundColor: resultCandidates.map(() => '#'+(Math.random()*0xFFFFFF<<0).toString(16))
        };

        const data = {labels, datasets: [dataset]};
        const arraydata = [data];
        setChartData(arraydata);
    },[resultCandidates]);

    const handleSimulateVoteClick = () => {
        const storedCandidates = RetrieveCandidates();
        if (!storedCandidates) return;
        let candidates = [];
        storedCandidates.map((cand) => {
            candidates.push({ ...cand, voteCount: 0, lost: false });
        });
        setInitialCandidates(candidates);

        setLoading(true);
    };

    const handleInstantRunOffClick = async () => {
        const runoffResults = await InstantRunOff(resultCandidates);
        const candidates = runoffResults.candidates;
        console.log(candidates);
        setResultCandidates([...candidates]);
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
                {/* {!loading && resultCandidates.map((candidate, index) => {
                    return (
                        <div className="mycard" key={index}>

                            <div>
                                <span style={{color: 'white'}}>{numToString(index+1) + " place"}</span>
                            </div>
                            <div>
                                <span style={{color: 'white'}}>{candidate.Name}</span>
                            </div>
                            <div>
                                <span style={{color: 'white'}}>Votes: {candidate.voteCount.toLocaleString()}</span>
                            </div>
                        </div>);
                })} */}
                {chartData.length > 0 && chartData.map((c, index) => {
                    return <Bar key={index} options={options} data={c} />
                })}
                <div>
                    <Button type="primary" onClick={handleInstantRunOffClick}>Instant Runoff</Button>
                </div>
            </Container>
        </>

    );
}

export default Election;