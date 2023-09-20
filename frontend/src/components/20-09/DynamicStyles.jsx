import React, { useState } from 'react';
import './DynamicStyles.css'

const DynamicStyles = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);

    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive)
    }

    const buttonClassName = (isButtonActive ? 'Active-Button' : "Inactive-Button");
    console.log(buttonClassName, "buttonClassName")

    return (
        <div>
            <h1>Dynamic Styles</h1>
            <button className={buttonClassName} onClick={handleButtonClick}>
                {isButtonActive ? "Active" : "Inactive"}
            </button>
        </div>
    )
}

export default DynamicStyles