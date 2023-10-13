import React from 'react';
import useLocalstorage from './useLocalstorage';
function CustomHookLS() {
    const [name, setName] = useLocalstorage('name', '');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    );
}
export default CustomHookLS