import React from 'react';
import "./Editor.css";
import {useState, useRef} from "react";

function Editor({onCreate}) {

    const [content,setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        // 13 === Enter
        if (e.key === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content === "")  {
            contentRef.current.focus();
            return;
        }

        // content onCreate(content) 반환
        onCreate(content);
        // 초기화
        setContent("");
    }

    return (
        <div className={"Editor"}>
             <input value={content}
                    ref={contentRef}
                    onChange={onChangeContent}
                    placeholder={"새로운 Todo..."}
                    onKeyDown={onKeyDown}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;