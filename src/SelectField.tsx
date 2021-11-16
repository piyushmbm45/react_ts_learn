import React from 'react'

interface Props{
    textInput : string;
}

export const SelectField: React.FC<Props> = ({textInput})=>{
    return (
        <>
        <h2>This is from other Component</h2>
        <h1>{textInput}</h1>
        </>
    );
}