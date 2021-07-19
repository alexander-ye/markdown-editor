import React from 'react';

const InputTextAreaStyle = {
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    borderTop: '1px solid gray'
};

const InputTextArea = ({ text, setText }) => {

    const handleChange = (event) => {
        const newText = event.target.value
        setText(newText)
    }

    return (
        <textarea style={InputTextAreaStyle} value={text} onChange={handleChange}>

        </textarea>
    )
};

export default InputTextArea