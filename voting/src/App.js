import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation.js';
import CandidatesPage from './CandidatesPage.js';
import Election from './Election.js';

function App() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Election />} />
          <Route path='/candidates' element={<CandidatesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
