import axios from "axios";

export const addForm = (form43, history) => async dispatch => {
    await axios.post("http://localhost:8080/form/add", form43);
    history.push("/");
}