import React, { useState } from 'react';

const Section5 = () => {

    return (

        <div id='section5'>
            <div id='formulaire' className='text-left container-lg'>
                <form action="submit">
                    <h2 className='text-white text-center'>Let’s discuss for <span className='text-danger my-5'>a project</span> :</h2>
                    <div className="row">
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="prenom">First name</label>
                        <input className='form-control' type="text" name='prenom' placeholder='Nazam' />
                    </div>
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="name">Last Name</label>
                        <input className='form-control' type="text" name='nom' placeholder='Muhammad' />
                    </div>
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="date">Birth date</label>
                        <input className='form-control' type="date" name='date' />
                    </div>
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="mail">Mail address</label>
                        <input className='form-control' type="mail" name='mail' placeholder='YourAdress@gmail.com' />
                    </div>
                    </div>
                    <div className="form-group w-100" >
                        <label htmlFor="message">Message</label>
                        <textarea className='form-control' name='message' placeholder='Type your message here...' />
                    </div>
                    <button className="btn btn-success mt-5 px-3 py-2" type='submit'>Submit</button>
                </form>
            </div>
        </div>

    )

};

export default Section5
