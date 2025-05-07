import React, {useState} from 'react';

const RegisterEx = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const onCreatedAt = (e) => {
        setCreatedAt(e.target.value);
    }
    return <>
             <div>
                <input type={"text"} onChange={onChangeTitle} value={title} placeholder={"제목"}/>
             </div>
             <div>
                <input type={"text"} onChange={onChangeDescription} value={description} placeholder={"내용"}/>
             </div>
             <div>
                <input type={"text"} onChange={onChangeAuthor} value={author} placeholder={"작성자"}/>
             </div>
             <div>
                <input type={"date"} onChange={onCreatedAt} value={createdAt} placeholder={"작성일"}/>
             </div>
           </>
}

export default RegisterEx;