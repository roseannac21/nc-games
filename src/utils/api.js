import axios from "axios";

const gamesAPI = axios.create({
    baseURL: "https://nc-games-no2.onrender.com/api"
});

export default gamesAPI