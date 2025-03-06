import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
            [e.target.birth]: e.target.value,
            [e.target.country]: e.target.value,
            [e.target.bio]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name='name'
                    value={input.name}
                    onChange={onChange}
                    placeholder={'Name'} />
            </div>

            <div>
                <input
                    name='birth'
                    value={input.birth}
                    onChange={onChange}
                    type='date' />
            </div>

            <div>
                <select
                    name='country'
                    value={input.country}
                    onChange={onChange}>
                    <option value=''></option>
                    <option value="kr">Korea</option>
                    <option value="us">America</option>
                    <option value="uk">UK</option>
                </select>
            </div>

            <div>
                <textarea
                    name='bio'
                    value={input.bio}
                    onChange={onChange} />
            </div>

            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default Register;