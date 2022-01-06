import React, { Component } from "react";

class Connexion extends Component {
  render() {
    return (
      <div className="connexionBox h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
        <form className="connexion form bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm flex flex-col items-center">
            <h1 className="uppercase font-bold mb-5">Connexion</h1>
            <input 
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full mb-2 border-b-4 border-blue-700"
            placeholder="Pseudo"
            type="text"
            required
            />
            <button
            className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide mt-2"
            type="submit">
                Go !
            </button>
        </form>
      </div>
    );
  }
}

export default Connexion;
