import React, {useState} from 'react';

const RegisterEx = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
        author: "",
        createdAt: "",
        email: ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    return <>
             <div>
                <input name={"title"} type={"text"} onChange={onChange} value={input.title} placeholder={"제목"}/>
             </div>
             <div>
                <input name={"description"} type={"text"} onChange={onChange} value={input.description} placeholder={"내용"}/>
             </div>
             <div>
                <input name={"author"} type={"text"} onChange={onChange} value={input.author} placeholder={"작성자"}/>
             </div>
             <div>
                <input name={"createdAt"} type={"date"} onChange={onChange} value={input.createdAt} placeholder={"작성일"}/>
             </div>
             <div>
                 <input name={"email"} type={"email"} onChange={onChange} value={input.email} placeholder={"이메일"}/>
             </div>
           </>
}

export default RegisterEx;