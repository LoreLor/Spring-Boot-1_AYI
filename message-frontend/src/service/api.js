import axios from 'axios'

const API_URL = 'http://localhost:8080/api/messages'

export async function fetchMessage () {
    try {
        const {data} = await axios.get(API_URL);
        console.log(typeof data);
        console.log('data del useff',data);
        
        return data;
        
    } catch (error) {
        console.error("Error al obtener los mensajes:", error);
    }
};
