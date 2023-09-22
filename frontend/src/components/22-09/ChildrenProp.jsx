import React from 'react'

const ChildrenProp = () => {
    return (
        <>
            <Swaraj>This is h1</Swaraj>
            <Button>Message</Button>
        </>
    )
}

const Button = ({ children }) => {
    return (
        <button>{children}</button>
    )
}

const Swaraj = ({ children }) => {
    return (
        <>
            <h1>{children}</h1>
            <h1>{children}</h1>
            <h1>{children}</h1>
        </>
    )
}

export default ChildrenProp