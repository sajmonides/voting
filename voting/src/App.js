import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation.js';

import Candidates from './Candidates.js';
import Voting from './Voting.js';

function App() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <div style={{minHeight: '20px'}}></div>
        <Routes>
          <Route path='/' element={<Voting />} />
          <Route path='/candidates' element={<Candidates />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
