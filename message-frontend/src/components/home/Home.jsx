import React, { useEffect, useState } from "react"
import { fetchMessage } from "../../service/api"
import { useTranslation } from 'react-i18next'


function Home() {
    const [message, setMessage] = useState("default_message");
    const [error, setError] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const response = await fetchMessage();
                console.log("Mensaje recibido:", response);

                response
                    ? setMessage(response)
                    : setMessage("No ingresaron mensajes");
            } catch (err) {
                setError(err.message);
            }
        };

        loadMessages();
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleClick = async () => {
        try {
            const response = await fetchMessage();
            response ? setMessage(response) : "No ingresaron mensajes";
            console.log("message", response);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleClean = () => {
        setMessage("default_message");
        setError(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md text-center transition-all duration-300 ease-in-out">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">
                    {t('title')}
                </h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Card */}
                <div className="bg-gray-300 p-4 rounded-lg shadow-md mb-6 h-50 w-100">
                    <p className="text-lg text-bold text-gray-600">
                        {t(message) || "No hay mensaje disponible"}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center space-x-2">
                    <button 
                        className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out"
                        onClick={() => changeLanguage("es")}>
                        {t("language_es")}
                    </button>
                    <button 
                        className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out"
                        onClick={() => changeLanguage("en")}>
                        {t("language_en")}
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-2 p-3">
                    <button
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out"
                        onClick={handleClick}
                    >
                        {t("show_message")}
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out"
                        onClick={handleClean}
                    >
                        {t("clear_message")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
