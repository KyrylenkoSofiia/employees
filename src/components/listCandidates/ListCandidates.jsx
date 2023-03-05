import React, { useState } from 'react';
import { candidatesArr } from '../../data/candidates';
import { Candidate } from '../candidate/Candidate';

import './ListCandidates.css';

export const ListCandidates = () => {
  const [candidates, setCandidates] = useState(candidatesArr);
  const [editingCandidateId, setEditingCandidateId] = useState(null);

  const removeCandidate = (guid) => {
    const newCandidates = candidates.filter((candidate) => candidate.guid !== guid);
    setCandidates(newCandidates);
  };

  const editCandidate = (id, editItem) => {
    const updatedCandidates = candidates.map((item) => {
      if (item.guid === id) {
        return { ...item, ...editItem, isEdit: false };
      }
      return item;
    });
    setCandidates(updatedCandidates);
  };

  const handleEditButtonClick = (id) => {
    if (id === editingCandidateId) {
      setEditingCandidateId(null);
    } else {
      setEditingCandidateId(id);
    }
  };

  return (
      <div className="container">
        <div className="count"><p>Count of candidates is: {candidates.length}</p></div>
        {candidates.map((candidate) => (
            <Candidate
                key={candidate.guid}
                candidate={candidate}
                removeCandidate={removeCandidate}
                editCandidate={editCandidate}
                isEditing={editingCandidateId === candidate.guid}
                onEditButtonClick={handleEditButtonClick}
            />
        ))}
      </div>
  );
};
