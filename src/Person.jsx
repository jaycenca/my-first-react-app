import { useState } from 'react';
export default function Person() {
    const [person, setPerson] = useState({ 
        name: 'John', 
        age: 10,
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleIncreaseAge = () => {
        // copy the existing person object into a new object
        // while updating the age property
        const newPerson = {
            ...person,
            age: person.age + 1
        };
        setPerson(newPerson);

        // handle mutiple updates to the state
        setPerson(prevPerson => ({
            ...prevPerson,
            age: prevPerson.age + 1
        }));
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const fullName = firstName + ' ' + lastName;
    
    return (
        <>
         <h2>{person.age}</h2>

         <input type="text" placeholder="First Name" onChange={handleFirstNameChange}/>
         <input type="text" placeholder="Last Name" onChange={handleLastNameChange}/>
         <h1>{fullName}</h1>
         <button onClick={handleIncreaseAge}>Increase Age</button>
        </>
    )
}