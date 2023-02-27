import './Candidates.css';
import { useState } from 'react';
import candidatesArr from '../data/candidates';
import Candidate from './Candidate';

function Candidates() {
  const [candidates, setCandidates] = useState(candidatesArr);
  const [isEdit, setAdding] = useState(false);


  const removeCandidate = function (guid) {
    const newCandidates = candidates.filter(
      (candidate) => candidate.guid !== guid
    );
    setCandidates(newCandidates);
  };

  const editCandidate =  (id, editing) => {
    setAdding(!isEdit);
    const editCandidates = candidates.map(item => {
      return id === item.guid ? {...item, ...editing } : item
    })
    setCandidates(editCandidates)
  };


  return (

      <div className='container'>
        {
          candidates.map(candidate => (
          <Candidate key={candidate.guid}
                    candidate={candidate}
                    removeCandidate={removeCandidate}
                    editCandidate={editCandidate}
                     isEdit={isEdit}
                    />))
        }
      </div>
  );
}

export default Candidates;
