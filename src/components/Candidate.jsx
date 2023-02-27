import './Candidate.css';
import { useState } from "react";

function Candidate({ isEdit, candidate, removeCandidate, editCandidate }) {
    const [isSelected, setSelected] = useState('');
    const [editingCandidate, setEditingCandidate] = useState({
        name: '',
        company: '',
        phone: '',
        email: ''
    });
    const handleInputChange = (e) => {
        const { value, name } = e.target
        setEditingCandidate({
            ...editingCandidate,
            [name]: value
        })
    }

    const handleEditClick = (id) => {
        setSelected(id);
        editCandidate(id, editingCandidate);
    }

    return (
        <div className='item' id={candidate.guid}>
            <button className='edit' onClick={() => handleEditClick(candidate.guid)}>{(isEdit && isSelected) ? 'Save' : 'Edit'}</button>
            <button className='close' onClick={() => removeCandidate(candidate.guid)}>x</button>
            {
                (isEdit && isSelected) ?
                    <input
                        type={"text"}
                        name={"name"}
                        value={editingCandidate.name}
                        placeholder={"Enter name"}
                        onChange={handleInputChange} />
                    :
                    <p className='name'>{candidate.name}</p>
            }
            {
                (isEdit && isSelected) ?
                    <input type={"text"}
                           name={"company"}
                           value={editingCandidate.company}
                           placeholder={"Enter company name"}
                           onChange={handleInputChange} />
                    :
                    <p><span>Company:</span><i>{candidate.company}</i></p>
            }
            <p className='item-phone'>
                <span>Phone: </span>
                {
                    (isEdit && isSelected) ?
                        <input type="tel"
                               name={"phone"}
                               value={editingCandidate.phone}
                               placeholder={"Enter phone number"}
                               onChange={handleInputChange} />
                        :
                        <a className='phone' href={`tel:${candidate.phone}`}>{candidate.phone}</a>
                }
            </p>
            <p className='item-email'>
                <span>Email: </span>
                {
                    (isEdit && isSelected) ?
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

export default Candidate;
