import axios from "axios";
import { async } from "q";

export const addForm = (form43, history) => async dispatch => {
    await axios.post("localhost:8080/api/board", form43);
    history.push("/");
}