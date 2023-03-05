import React, { useEffect, useState } from 'react';

import './Candidate.css';

export const Candidate = ({ isEditing, candidate, removeCandidate, editCandidate, onEditButtonClick }) => {
    const [editingCandidate, setEditingCandidate] = useState({
        name: candidate.name,
        company: candidate.company,
        phone: candidate.phone,
        email: candidate.email,
    });

    const [localIsEditing, setLocalIsEditing] = useState(isEditing);

    useEffect(() => {
        setLocalIsEditing(isEditing);
    }, [isEditing]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditingCandidate({
            ...editingCandidate,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        onEditButtonClick(candidate.guid)
        editCandidate(candidate.guid, editingCandidate);
        setLocalIsEditing(false);
    };

    return (
        <div className="item" id={candidate.guid}>
            <button className="edit" onClick={handleEditClick}>
                {localIsEditing ? 'Save' : 'Edit'}
            </button>
            <button className="close" onClick={() => removeCandidate(candidate.guid)}>
                x
            </button>
            {localIsEditing ? (
                <>
                    <span>Name</span>
                    <input type="text" name="name" value={editingCandidate.name} placeholder="Enter name" onChange={handleInputChange} />
                </>
            ) : (
                <p className="name">{candidate.name}</p>
            )}
            <p>
                <span>Company:</span>
            {localIsEditing ? (
                <input type="text" name="company" value={editingCandidate.company} placeholder="Enter company name" onChange={handleInputChange} />
            ) : (

                    <i>{candidate.company}</i>

            )}
            </p>
            <p className="item-phone">
                <span>Phone: </span>
                {localIsEditing ? (
                        <input type="tel" name="phone" value={editingCandidate.phone} placeholder="Enter phone number" onChange={handleInputChange} />
                    )

                    :
                        <a className='phone' href={`tel:${candidate.phone}`}>{candidate.phone}</a>
                }
            </p>
            <p className='item-email'>
                <span>Email: </span>
                {
                    localIsEditing ?
                        <input type={"email"}
                               name={"email"}
                               value={editingCandidate.email}
                               placeholder={"Enter email address"}
                               onChange={handleInputChange} />
                        :
                        <a className='email' href={`mailto:${candidate.email}`}>
                            {candidate.email}
                        </a>
                }
            </p>
            <p>
                <span>Gender: </span>
                <span className="gender">
                {candidate.gender === 'male' ? '\uD83D\uDC68' : '\uD83D\uDC69'}
            </span>
            </p>
            <ul>
                {candidate.tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
        </div>
    );
}

