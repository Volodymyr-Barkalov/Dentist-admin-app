import axios from "axios";
import { async } from "q";

export const addForm = (form43, history) => async dispatch => {
    await axios.post("http://localhost:8080/main", form43);
    history.push("/welcome");
}