// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import "./Style.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export const Form = () => {
  const auth = useContext(AuthContext);
    const [err, setErr] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    async function handleAdmin(e) {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        
        const data = {
            "email": email,
            "pass": pass,
        }

        axios.post("http://localhost:8000/admin", data)
            .then((result) => {
                console.log(result);
                auth.setAuthenticated(true);
                navigate("/adminportal");
            })
            .catch((err) => {
                setErr(true);
                console.log(err);
            })
    }

  return (
    <div className='form flex justify-center items-center bg-black'>
        <div className="bg-gray-800 w-1/2 rounded-xl py-16">
          <h1 className="text-2xl text-center text-white">
            {err ? 'Something Went Wrong , Try Again' : ''}
          </h1>
          <form onSubmit={handleAdmin} className='flex flex-col justify-center items-center'>
            <br />
            <input
              type="email"
              placeholder="Enter Email id"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="my-1 rounded-lg p-1 w-3/4 bg-black border-x-2 border-y-2 text-white"
            />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPass(e.target.value)}
              name="pass"
              className="my-1 rounded-lg p-1 w-3/4 bg-black border-x-2 border-y-2 text-white"
            />
            <br />
            <button
              type="submit"
              className="bg-white w-3/4 rounded-lg p-1 my-1 text-black text-2xl font-bold hover:bg-slate-200"
            >
              Submit
            </button>
          </form>
        </div>      
    </div>
  )
}
