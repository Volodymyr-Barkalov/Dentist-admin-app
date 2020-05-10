import axios from "axios";

export const addForm = (form43, history) => async dispatch => {
    await axios.post("/form/add", form43);
    history.push("/");
}