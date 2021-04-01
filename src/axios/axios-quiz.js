import axios from "axios";

export default axios.create({
    baseURL: "https://react-quiz-5605d-default-rtdb.firebaseio.com/"
})