import React from 'react'
import HomePage from './Pages/HomePage';
import Candidate from './Layout/Candidate';
import Voters from './Layout/Voter'
import Officials from './Layout/Official'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ForCandidates from './Pages/ForCandidates';
import ForVoters from './Pages/ForVoters'
import ForOfficials from './Pages/ForOfficials'
import CandidateHome from './Pages/CandidateHome';
import CompleteRegistrationCandidate from './Pages/CompleteRegistrationCandidate';
import CandidateAppStatus from './Pages/CandidateAppStatus';
import CandidateProposal from './Pages/CandidateProposal';
import VoterHome from './Pages/VoterHome';
import VoterAppStatus from './Pages/VoterAppStatus';
import OfficialsHome from './Pages/OfficialsHome';
import ViewVoters from './Pages/ViewVoters';
import ViewCandidates from './Pages/ViewCandidates';
import ElectionStartsStops from './Pages/ElectionStartsStops';
// import ViewResultVoter from './Pages/ViewResultVoter';
import VoteCast from './Pages/VoteCast';
import ViewResultVoter from './Pages/ViewResultVoter';
import ViewResultCandidate from './Pages/ViewResultCandidate';
import ViewResultOfficial from './Pages/ViewResultOfficial';
import CandidateRegistrationForm from './Pages/CandidateRegistrationForm';
import VoterRegistrationForm from './Pages/VoterRegistrationForm';



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<HomePage />}>
        <Route index element={<HomePage />}/>
      </Route>

      <Route path='/' element={<Candidate/>}>
        <Route path='/forCandidates' element={<ForCandidates />}/>
        <Route path='/CandidateHome' element={<CandidateHome />}/>
        <Route path='/candidateRegistrationForm' element={<CandidateRegistrationForm/>}/>
        <Route path='/CompleteRegistrationCandidate' element={<CompleteRegistrationCandidate/>}/>
        <Route path='/CandidateAppStatus' element={<CandidateAppStatus/>}/>
        <Route path='/CandidateProposal' element={<CandidateProposal/>}/>
        <Route path='/viewResultCandidate' element={<ViewResultCandidate/>}/>

      </Route>

      <Route path='/' element={<Voters/>}>
        <Route path='/forVoters' element={<ForVoters />}/>
        <Route path='/voterHome' element={<VoterHome />}/>
        <Route path='/voterAppStatus' element={<VoterAppStatus/>}/>
        <Route path='/voteCast' element={<VoteCast/>}/>
        <Route path='/viewResultVoter' element={<ViewResultVoter/>}/>
        <Route path='/voterRegistrationForm' element={<VoterRegistrationForm/>}/>
        
      </Route>
      <Route path='/' element={<Officials/>}>
        <Route path='/officials' element={<ForOfficials />}/>
        <Route path='/officialsHome' element={<OfficialsHome />}/>
        <Route path='/viewVoters' element={<ViewVoters />}/>
        <Route path='/viewCandidates' element={<ViewCandidates />}/>
        <Route path='/electionStartsStops' element={<ElectionStartsStops />}/>
        <Route path='/viewResultOfficial' element={<ViewResultOfficial />}/>
      </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
