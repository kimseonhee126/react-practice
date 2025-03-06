import { useState } from "react";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅을 직접 만들 수 있다

// use 키워드 사용하면 자동으로 커스텀 훅으로 등록된다
function useInput() {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
};

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;