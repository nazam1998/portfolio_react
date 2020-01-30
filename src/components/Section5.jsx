import React, { useState } from 'react';

const Section5 = () => {
    const [age, setAge] = useState('0');

    const changeAge = (e) => {
        if (age > '0') {
            setAge(e.target.value)
        } else {
            setAge('99');
        }
    }

    return (

        <div id='section5'>
            <div id='formulaire' className='text-left'>
                <form action="submit">
                    <h2 className='text-white text-center'>Let’s discuss for <span className='text-danger my-5'>a project</span> :</h2>
                    <label htmlFor="prenom">First name</label><input type="text" name='prenom' placeholder='Nazam' />
                    <label htmlFor="name">Last Name</label><input type="text" name='nom' placeholder='Muhammad' />
                    <label htmlFor="age">Age</label><input type="number" name='age' value={age} onChange={changeAge} />
                    <label htmlFor="date">Birth date</label><input type="date" name='date' />
                    <label htmlFor="mail">Mail address</label><input type="mail" name='mail' placeholder='YourAdress@gmail.com' />
                    <label htmlFor="message">Message</label><textarea name='message' placeholder='Type your message here...' />
                    <button className="btn btn-success mt-5 px-3 py-2" type='submit'>Submit</button>
                </form>
            </div>
        </div>

    )

};

export default Section5
