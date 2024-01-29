// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../Api/api";

export const Admin = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [query, setQuery] = useState(null);
  const [work, setWork] = useState(null);
  const [workurl, setWorkurl] = useState("");
  const [worktitle, setWorkTitle] = useState("");
  const [workdesc, setWorkdesc] = useState("");
  const [flag, setFlag] = useState(false);
  const [err, setErr] = useState(false);

  async function hangleData() {
    axios
      .get(`${base_url}/getData`)
      .then((result) => {
        console.log(result.data.msg);
        setQuery(result.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    async function getAllWork() {
        axios.get(`${base_url}/getWork`)
            .then((result) => {
                console.log(result.data.msg);
                setWork(result.data.msg);
            })
            .catch((err) => {
                console.log(err);
            })
    }

  function handleWorkSubmit(e) {
    e.preventDefault();

    const data = {
      link: workurl,
      title: worktitle,
      desc: workdesc,
    };

    axios
      .post(`${base_url}/work`, data)
      .then((result) => {
        console.log(result);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  }

  async function handleQuery(id) {
    const data = { id: id };
    axios
      .post(`${base_url}/resolveQuery`, data)
      .then((result) => {
        console.log(result);
        hangleData();
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    async function handleWork(id) {
        const data = { id: id };
        axios
        .post(`${base_url}/removeWork`, data)
        .then((result) => {
            console.log(result);
            getAllWork();  
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function hanglehideData() {
        setQuery(null);
    }
  
    function handlehidework() {
        setWork(null);
    }
  
    function logoutHandler() {
      auth.setAuthenticated(false);
      navigate("/admin");
    }

  return (
    <div className="text-white p-4 flex flex-col">
      <div>
        <h1 className="text-center text-4xl text-green-700">Admin Portal</h1>
      </div>
      <div className="flex justify-end">
        <button
            type="submit"
            className="bg-white w-24 rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
            onClick={logoutHandler}
        >
          Logout
        </button>    
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl">New Work Add</h1>
        <p className="my-2 text-xl text-start text-green-800 rounded-lg w-1/2">
          {flag ? "New Work is Add Sucessfull" : ""}
          {err ? "Something Went Wrong" : ""}
        </p>
        <form
          onSubmit={handleWorkSubmit}
          className=" bg-slate-600 rounded-xl p-2 w-3/5"
        >
          <input
            type="text"
            placeholder="Work URL Link"
            onChange={(e) => setWorkurl(e.target.value)}
            name="url"
            className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
          />
          <br />
          <input
            type="text"
            placeholder="Work Title"
            onChange={(e) => setWorkTitle(e.target.value)}
            name="title"
            className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
          />
          <br />
          <input
            type="text"
            placeholder="Work Description"
            onChange={(e) => setWorkdesc(e.target.value)}
            name="desc"
            className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
          />
          <br />
          <button
            type="submit"
            className="bg-white w-full rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
          >
            Submit
          </button>
        </form>
        </div>
        <hr className="my-4 bg-green-600"></hr>
          <div className="my-4">
            <div className="flex justify-around">
                {!query ? (
                <button
                    onClick={hangleData}
                    className="bg-white rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
                >
                    Show Query
                </button>
                ) : (
                <button
                    onClick={hanglehideData}
                    className="bg-white rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
                >
                    Hide Query
                </button>
                )}

                {!work ? (
                <button
                    onClick={getAllWork}
                    className="bg-white rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
                >
                    Show Work
                </button>
                ) : (
                <button
                    onClick={handlehidework}
                    className="bg-white rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
                >
                    Hide Work
                </button>
                )}
            </div>
        {/* show Query */}
        <div className="flex gap-2 flex-wrap py-2 cursor-pointer">
        {query ? (              
            <table className="text-white table-auto border-collapse border border-gray-600">
              <thead>
                <tr>
                  <th className="border-2 border-gray-600 p-2">Name</th>
                  <th className="border-2 border-gray-600 p-2">Email</th>
                  <th className="border-2 border-gray-600 p-2">Query</th>
                  <th className="border-2 border-gray-600 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {query.map((q, index) => (
                  <tr key={index}>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {q.name}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {q.email}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {q.inquiry}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      <button
                        className="p-2 rounded-lg bg-red-500"
                        onClick={() => handleQuery(q._id)}
                      >
                        Query Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
              
        {/* handle work */}

        <div className="flex gap-2 flex-wrap py-2 cursor-pointer">
          {work ? (
            <table className="text-white table-auto border-collapse border border-gray-600">
              <thead>
                <tr>
                  <th className="border-2 border-gray-600 p-2">Work Title</th>
                  <th className="border-2 border-gray-600 p-2">Work Desc</th>
                  <th className="border-2 border-gray-600 p-2">Work URL</th>
                  <th className="border-2 border-gray-600 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {work.map((w, index) => (
                  <tr key={index}>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {w.title}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {w.description}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      {w.link}
                    </td>
                    <td className="border-2 border-gray-600 p-2 px-4">
                      <button
                        className="p-2 rounded-lg bg-red-500"
                        onClick={() => handleWork(w._id)}
                      >
                        Remove Work
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
              
      </div>
    </div>
  );
};
