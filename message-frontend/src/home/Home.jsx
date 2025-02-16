// eslint-disable-next-line no-unused-vars
import React from "react";
import Message from "../message/Message";

function Home() {
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2x1">
                <h1 className="text-3x1 font-bold text-gray-700 mb-4">
                    Game of Thrones Sentences
                </h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <Message text={message} />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                    onClick={handleClick}
                >
                    Show Sentence
                </button>
            </div>
        </div>
    );
}

export default Home;
