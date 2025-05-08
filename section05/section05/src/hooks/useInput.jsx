import {useState} from "react";
import HookExam from "../components/HookExam.jsx";

function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;