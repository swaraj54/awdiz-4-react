import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
    const Button = styled.button`
    color : red;
    background-color : blue;
    `;
    return (
        <div style={{ backgroundColor: "red" }}>
            <Button>Styled Components</Button>
        </div>
    )
}

export default StyledComponents