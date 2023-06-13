import axios from "axios";
export default axios.create({
    baseURL: "https://jayramin.000webhostapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})